<template>
  <div>
    <Feedback></Feedback>
  </div>
</template>

<style scoped>
div {
  padding-top: 130px;
  min-height: 70vh;
}
</style>

<script>
import firebase from "firebase";

import Feedback from "./Feedback";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";


export default {
  components: {
    Feedback
  },
  beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
    });
  }
};
</script>
