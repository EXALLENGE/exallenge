<template>
  <div class="settings">
    <div class="container">
      <UserInfo></UserInfo>
      <UserTabs></UserTabs>
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
  padding-top: 30px;
}
a {
  color: #a38b70;
  text-decoration: none;
}
</style>

<script>
import UserInfo from "./UserInfo";
import UserTabs from "./UserTabs";
export default {
  components: {
    UserInfo,
    UserTabs
  }
};
</script>
