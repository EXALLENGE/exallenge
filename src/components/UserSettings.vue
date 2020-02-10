<template>
  <div class="settings">
    <div class="container">
      <UserInfo></UserInfo>
      <UserTabs></UserTabs>
      <SelectCity style="padding-top: 30px;"></SelectCity>
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
</style>

<script>
import UserInfo from "./UserInfo";
import UserTabs from "./UserTabs";
import SelectCity from "./SelectCity";

export default {
  components: {
    UserInfo,
    UserTabs,
    SelectCity
  }
};
</script>
