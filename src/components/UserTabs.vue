<template>
  <div class="tabs">
    <router-link to="/user/courses">Курсы</router-link>
    <router-link to="/user/settings">Настройки</router-link>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
}

.tabs a {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 23px;
  color: #505050;
  text-decoration: none;
  margin-top: 18px;
  margin-right: 20px;
}
</style>

<script>
export default {};
</script>
