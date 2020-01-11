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
      <p>
        Бесплатные курсы по программированию
        <span class="tmp"></span>
      </p>
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
.tmp {
  color: red;
}
.tmp:after {
  content: "";
  animation: change 2s linear infinite;
}
@keyframes change {
  0% {
    content: "ipsum";
  }
  10% {
    content: "dolor";
  }
  20% {
    content: "sit";
  }
  30% {
    content: "amet";
  }
  40% {
    content: "consectetur";
  }
  50% {
    content: "adipisicing";
  }
  60% {
    content: "elit";
  }
  70% {
    content: "Hic";
  }
  80% {
    content: "atque";
  }
  90% {
    content: "fuga";
  }
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
