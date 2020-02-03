<template>
  <div>
    <Promo></Promo>
    <features></features>
    <PressReview></PressReview>
    <Reviews></Reviews>
    <Popular></Popular>
    <Feedback></Feedback>
  </div>
</template>

<style scoped>
</style>

<script>
import Promo from "./Promo";
import Features from "./Features";
import PressReview from "./PressReview";
import Reviews from "./Reviews";
import Popular from "./Popular";
import Feedback from "./Feedback";

export default {
  components: {
    Promo,
    Features,
    PressReview,
    Reviews,
    Popular,
    Feedback
  }
};
</script>
