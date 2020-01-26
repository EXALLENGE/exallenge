<template>
  <div class="container">
    <div class="main-info">
      <p>
        Бесплатные курсы по программированию
        <br />
        <span class="tmp"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 400px;
  background: linear-gradient(
      90deg,
      rgba(48, 181, 139, 0.8) 0%,
      rgba(48, 181, 139, 0.8) 100%
    ),
    url(../assets/promo-image.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.main-info {
  position: absolute;
  top: 20%;
  left: 30%;
  color: #ffffff;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  text-align: center;
}
.tmp {
  color: #ffffff;
}
.tmp:after {
  content: "";
  animation: change 5s linear infinite;
}
@keyframes change {
  0% {
    content: "в Москве";
  }
  20% {
    content: "в Санкт-Петербурге";
  }
  40% {
    content: "в Рязани";
  }
  60% {
    content: "в Краснодаре";
  }
  80% {
    content: "в Казани";
  }
  100% {
    content: "в онлайне";
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
