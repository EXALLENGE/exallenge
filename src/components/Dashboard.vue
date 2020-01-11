<template>
  <div class="container">
    <vue-particles
      color="#ffffff"
      :particleOpacity="0.5"
      :particlesNumber="140"
      shapeType="circle"
      :particleSize="3"
      linesColor="#ffffff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="push"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="main-info">
      <div v-if="user.loggedIn">You are logged in!</div>
      <button @click="cl">hello</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #30b58b;
  position: relative;
}
.main-info {
  position: absolute;
  top: 0;
}
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
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

// Vue.loadScript("/particles.js");
</script>
