<template>
  <div>
    <Promo></Promo>
    <features></features>
    <PressReview></PressReview>
    <Reviews></Reviews>
    <Popular></Popular>
  </div>
</template>

<style scoped>
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

import Promo from "./Promo";
import Features from "./Features";
import PressReview from "./PressReview";
import Reviews from "./Reviews";
import Popular from "./Popular";

export default {
  components: {
    Promo,
    Features,
    PressReview,
    Reviews,
    Popular
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    cl() {
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        // Email sent.
        alert("email sent");
      });
    }
  }
};
</script>
