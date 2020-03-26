<template>
  <div class="popular-and-price">
    <div class="container">
      <h2 class="section-title" v-html="course['course_name']"></h2>
      <p>{{ course["description"]}}</p>
      <p>
        Мы проводим этот курс в онлайн и в офлайн форматах. Пожалуйста, уточните информацию
        о себе в
        <router-link to="/user/settings">настройках</router-link>. Мы свяжемся с вам в ближайшее время.
      </p>
    </div>
    <p>{{course}}</p>
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

.section-title {
  padding-left: 20px;
}

p {
  padding-left: 20px;
}

a {
  color: #a38b70;
  text-decoration: none;
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
import { mapGetters } from "vuex";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  data() {
    return {
      course: {}
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
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