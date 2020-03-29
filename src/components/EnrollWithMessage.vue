<template>
  <div class="popular-and-price">
    <div class="container">
      <h2 class="section-title" v-html="courseInfo.name"></h2>
      <a class="btn to-all-reviews" href="/courses" title="Посмотреть все курсы">Все курсы</a>
      <p>{{ courseInfo.description}}</p>
      <p>
        Мы проводим этот курс в онлайн и в офлайн форматах. Пожалуйста, уточните информацию
        о себе в
        <router-link to="/user/settings">настройках</router-link>. Мы свяжемся с вами в ближайшее время.
      </p>
      <CoursesContent :course="courseInfo" />
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
  position: relative;
}

.section-title {
  padding-left: 20px;
}

p {
  font-size: 22px;
  padding-left: 20px;
}

a {
  color: #a38b70;
  text-decoration: none;
}

.to-all-reviews {
  position: absolute;
  top: 0;
  right: 0;

  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 18px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}

.to-all-reviews:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.to-all-reviews:active {
  color: #908b85;
  border: 2px solid #7d7973;
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

@media screen and (max-width: 1020px) {
  .container {
    width: initial;
    padding-right: 20px;
    padding-left: 20px;
  }
  .to-all-reviews {
    top: 10px;
    right: 20px;
  }
}

@media screen and (max-width: 750px) {
  .reviews-list {
    display: block;
  }
  .review-item {
    width: initial;
    margin: 0;
    margin-right: 80px;
    padding: 0;
    padding-left: 50px;
    border-left-color: transparent;
  }
}

@media screen and (max-width: 420px) {
  .to-all-reviews {
    display: none;
  }
  .section-title {
    margin-right: 0px;
  }
}
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

import CoursesContent from "./CourseContent";

import {
  getUserInfo,
  checkRouter,
  convertCourseResponseStruncture
} from "../utils/getUserInfo";

export default {
  components: {
    CoursesContent
  },
  data() {
    return {
      course: {}
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
    courseInfo() {
      return convertCourseResponseStruncture(
        this.course,
        this.user,
        this.$route.params.course
      );
    }
  },

  beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
      firebase
        .firestore()
        .collection("coursesContent")
        .doc(this.$route.params.course)
        .get()
        .then(doc => {
          this.course = doc.data();
        })
        .catch(err => {
          alert("Error getting documents", err);
        });
    });
  }
};
</script>