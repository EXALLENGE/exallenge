<template>
  <div class="press-review">
    <div class="wrapper">
      <h2 class="section-title">{{user.data.displayName}}</h2>
      <h2 class="section-title">{{user.data.email}}</h2>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 20px;
  line-height: 30px;
}

@media screen and (max-width: 400px) {
  .section-title {
    margin-right: 0px;
    width: initial;
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
};
</script>
