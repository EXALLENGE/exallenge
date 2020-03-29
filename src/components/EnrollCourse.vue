<template>
  <div></div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
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
          let data = doc.data();
          let price = parseInt(data.meta.price);
          if (price > 0) {
            this.$router.push({
              path: `/enroll-with-message/${this.$route.params.course}`
            });
            return;
          } else {
            firebase
              .firestore()
              .collection("users")
              .doc(user.email)
              .set(
                { courses: { [this.$route.params.course]: 0 } },
                { merge: true }
              )
              .then(() => {
                console.log("Записали пользователя на курс"); // eslint-disable-line no-console
              });
            this.$store.commit("updateCourseInfo", this.$route.params.course);
            this.$router.push({
              path: `/description/${this.$route.params.course}`
            });
          }
        });
    });
  }
};
</script>