<template>
  <div>
    <CourseContent />
  </div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

import CourseContent from "./CourseContent";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  components: {
    CourseContent
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },

  beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
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