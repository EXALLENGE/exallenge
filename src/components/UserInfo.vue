<template>
  <div class="press-review">
    <div class="wrapper">
      <h2 class="section-title">О нас</h2>
      <blockquote>
        <p>Вам наверное интересно как мы начали читать лекции и зачем мы это делаем. В этой статье на медиуме мы рассказали о нашей мотивации и о самих курсах.</p>
        <div>
          <cite>Блог на Medium</cite>
          <a class="btn" href="#">Читать</a>
        </div>
      </blockquote>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
};
</script>
