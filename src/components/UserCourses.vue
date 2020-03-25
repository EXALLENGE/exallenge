<template>
  <div class="settings">
    <div class="container">
      <UserInfo style="padding-left: 15px;"></UserInfo>
      <UserTabs style="padding-left: 30px;"></UserTabs>
      <div class="courses">
        <h2>У вас еще нет курсов</h2>
        <p>
          Можете выбрать курсы
          <router-link to="/courses">тут</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings {
  min-height: 70vh;
  padding-top: 190px;
  padding-bottom: 90px;
}

.container {
  width: 1000px;
  margin: 0 auto;
}

.courses {
  padding-left: 30px;
  padding-top: 30px;
}
a {
  color: #a38b70;
  text-decoration: none;
}

@media only screen and (max-width: 1000px) {
  .container {
    width: initial;
  }
}
</style>

<script>
import firebase from "firebase";

import UserInfo from "./UserInfo";
import UserTabs from "./UserTabs";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  components: {
    UserInfo,
    UserTabs
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
