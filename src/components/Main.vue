<template>
  <div>
    <Promo></Promo>
    <features></features>
    <PressReview></PressReview>
    <Reviews></Reviews>
    <Courses></Courses>
    <Feedback></Feedback>
  </div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";

import Promo from "./Promo";
import Features from "./Features";
import PressReview from "./PressReview";
import Reviews from "./Reviews";
import Courses from "./Courses";
import Feedback from "./Feedback";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  components: {
    Promo,
    Features,
    PressReview,
    Reviews,
    Courses,
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
