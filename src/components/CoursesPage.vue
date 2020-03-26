<template>
  <div class="popular-and-price">
    <div class="container">
      <h2 class="section-title">Курсы</h2>

      <div class="popular-items">
        <div class="catalog-item" v-for="course in courses" v-bind:key="course">
          <h3 v-html="course.title"></h3>
          <p>{{ course.description}}</p>
          <div class="buttons">
            <a :href="description(course.courseId)" class="btn btn-info">Описание</a>
            <a
              :href="enrollOrContinue(course.courseId, course.price)"
              class="btn btn-buy"
              v-if="join(course.courseId)"
            >Присоединиться</a>
            <a
              :href="enrollOrContinue(course.courseId, course.price)"
              class="btn btn-buy"
              v-else
            >Продолжить</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  margin: 0;
  margin-right: 180px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: #707070;
}
.popular-and-price {
  min-height: 70vh;
  padding-top: 190px;
  padding-bottom: 90px;
}

.container {
  width: 1000px;
  margin: 0 auto;
}

.popular-and-price .container {
  position: relative;
}

.popular-items {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

.catalog-item {
  width: 262px;
  padding: 15px 22px;
  border: 1px solid #d8d8d8;
}

.catalog-item h3 {
  margin: 0;
  font-size: 22px;
  color: #707070;
}

.catalog-item p {
  height: 80px;
  font-size: 14px;
}

.catalog-item-price {
  max-width: 55px;
  margin-bottom: 20px;
}

.catalog-item .btn {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 9px 16px;
  margin-top: 20px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}
.catalog-item .btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.catalog-item .btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

.catalog-item .btn-info {
  margin-right: 30px;
}

.buttons {
  margin-top: 30px;
  margin-bottom: 30px;
}

.section-title {
  padding-left: 20px;
}

.popular-items {
  display: block;
}
.catalog-item {
  width: initial;
  border: initial;
}
.catalog-item h3 {
  max-width: initial;
}
.catalog-item p {
  font-size: 16px;
  height: initial;
}

@media only screen and (max-width: 1050px) {
  .section-title {
    padding-left: 20px;
  }

  .popular-items {
    display: block;
  }
  .container {
    width: initial;
  }
  .catalog-item {
    width: initial;
    border: initial;
  }
  .catalog-item h3 {
    max-width: initial;
  }
  .catalog-item p {
    font-size: 16px;
    height: initial;
  }
}
</style>

<script>
import firebase from "firebase";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  data() {
    return {
      courses: []
    };
  },
  methods: {
    join: function(href) {
      if (!(href in this.$store.state.user.courses)) {
        return true;
      }
      return false;
    },
    description: function(href) {
      return "/description/" + href;
    },
    enrollOrContinue: function(href, price) {
      if (this.join(href)) {
        if (price == 0) {
          return "/enroll/" + href;
        }
        return "/enroll-with-message/" + href;
      }
      return `/course/${href}/${this.$store.state.user.courses[href]}`;
    }
  },
  beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
    });
    let self = this;
    const db = firebase.firestore();
    if (this.$store.state.courses.length > 0) {
      return;
    }
    let coursesInfo = db.collection("coursesInfo");
    coursesInfo
      .get()
      .then(snapshot => {
        let courses = [];
        snapshot.forEach(doc => {
          let courseItem = {};
          let meta = JSON.parse(doc.data()["meta.json"]);
          courseItem["courseId"] = doc.id;
          courseItem["title"] = meta["course_name"];
          courseItem["description"] = meta["description"];
          courseItem["price"] = meta["price"];
          courses.push(courseItem);
          self.$store.commit("saveCourse", {
            id: doc.id,
            data: doc.data()
          });
        });
        courses.sort(function(a, b) {
          if (a["price"] < b["price"]) return -1;
          if (a["price"] > b["price"]) return 1;
          return 0;
        });
        this.courses = courses;
      })
      .catch(err => {
        alert("Error getting documents", err);
      });
  }
};
</script>
