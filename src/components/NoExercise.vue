<template>
  <div></div>
</template>

<style scoped>
.submit-btn {
  margin-left: 50px;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 40px;
  padding: 9px 21px;
  background: #fff;
  color: #30b58b;
  border: 2px solid #30b58b;
  border-radius: 4px;
}

.submit-btn:hover {
  color: #30b58b;
  border: 2px solid #30b58b;
}

.submit-btn:active {
  color: #30b58b;
  border: 2px solid #30b58b;
}
</style>

<script>
import { updateUserStatus } from "../utils/getUserInfo";

export default {
  props: ["task", "resolveExercise"],
  created: function() {
    console.log(this); // eslint-disable-line no-console
    // обновит статус пользователя, если он делает это упражнение в первый раз
    updateUserStatus();
    // показывает кнопку продолжить
    this.resolveExercise();
  }
};
</script>