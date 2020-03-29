<template>
  <div>Задание</div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";

export default {
  methods: {
    checkUserEnrolled(courses) {
      if (!courses.hasOwnProperty(this.$route.params.course)) {
        this.$router.push({
          path: `/courses`
        });
      }
    },
    checkUserReached(courses) {
      if (parseInt(this.$route.params.task) > courses[this.$route.params.course]) {
        this.$router.push({
          path: `/courses`
        });
      }
    }
  },
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      if (user) {
        const db = firebase.firestore();
        db.collection("users")
          .doc(user.email)
          .get()
          .then(doc => {
            const userInfo = doc.data();
            this.$store.commit("saveUserInfo", userInfo);
            this.checkUserEnrolled(userInfo.courses);
            this.checkUserReached(userInfo.courses);
            firebase
              .firestore()
              .collection("coursesContent")
              .doc(this.$route.params.course)
              .get()
              .then(doc => {
                this.course = doc.data();
              });
          });
      } else {
        this.$router.push({
          path: `/courses`
        });
      }
    });
  }
};
</script>