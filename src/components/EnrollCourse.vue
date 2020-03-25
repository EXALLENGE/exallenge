<template>
  <div>{{course}}</div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

import {getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    }),
    course() {
      for (const course of this.$store.state.courses) {
        console.log(this.$route.params.course); // eslint-disable-line no-console
        let courseId = Object.keys(course)[0];
        if (courseId === this.$route.params.course) {
          return course[courseId];
        }
      }
      return {};
    }
  },

  beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
      let self = this;
      const db = firebase.firestore();
      let course = db
        .collection("coursesContent")
        .doc(this.$route.params.course);
      course
        .get()
        .then(doc => {
          let data = doc.data();
          let price = parseInt(JSON.parse(data["meta.json"]).price);
          if (price > 0) {
            this.$router.push({
              path: `/description${this.$route.params.course}`
            });
            return;
          }
          self.$store.commit("saveCourse", {
            id: doc.id,
            data: data
          });
        })
        .catch(err => {
          alert("Error getting documents", err);
        });
      let users = firebase
        .firestore()
        .collection("users")
        .doc(user.email);
      users
        .set({ courses: { [this.$route.params.course]: 0 } }, { merge: true })
        .then(() => {
          console.log("Записали пользователя на курс"); // eslint-disable-line no-console
        });
      self.$store.commit("updateCourseInfo", this.$route.params.course);
    });
  }
};
</script>