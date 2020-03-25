<template>
  <div>
    <h2 class="section-title">Страница еще не готова.</h2>
    <p>Зарегестриуйтесь, если вы еще не снами и мы будем держать вас в курсе!</p>
  </div>
</template>

<style scoped>
div {
  min-height: 70vh;
  text-align: center;
}

.section-title {
  margin: 0;
  margin-right: 0px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: #707070;
}

p {
  padding: 15px;
}
</style>

<script>
import firebase from "firebase";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
    beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
    });
  }
};
</script>
