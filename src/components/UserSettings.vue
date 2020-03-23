<template>
  <div class="settings">
    <div class="container">
      <UserInfo style="padding-left: 15px;"></UserInfo>
      <UserTabs style="padding-left: 30px;"></UserTabs>
      <UserInputs style="padding-top: 30px; padding-left: 30px;"></UserInputs>
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
import UserInputs from "./UserInputs";

export default {
  components: {
    UserInfo,
    UserTabs,
    UserInputs
  },
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      if (!this.$store.state.user.loggedIn) {
        this.$router.push({ path: "/login" });
        return;
      }
    });
  }
};
</script>
