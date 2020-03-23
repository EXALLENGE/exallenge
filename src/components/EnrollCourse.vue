<template>
  <div>{{user}}</div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

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
          return JSON.parse(course[courseId]["meta.json"]);
        }
      }
      return {};
    }
  },

  beforeCreate: function() {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        this.$store.dispatch("fetchUser", user);
        console.log(this.$store.state.user.loggedIn); // eslint-disable-line no-console
        if (!this.$store.state.user.loggedIn) {
          this.$router.push({ path: "/login" });
          return;
        }
        let self = this;
        const db = firebase.firestore();
        let course = db
          .collection("coursesContent")
          .doc(this.$route.params.course);
        course
          .get()
          .then(doc => {
            self.$store.commit("saveCourse", {
              id: doc.id,
              data: doc.data()
            });
          })
          .catch(err => {
            alert("Error getting documents", err);
          });
      })
  }
};
</script>