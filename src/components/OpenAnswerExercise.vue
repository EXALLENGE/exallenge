<template>
  <div>открытый вопрос</div>
</template>

<style scoped>
</style>

<script>
import { updateUserStatus } from "../utils/getUserInfo";

export default {
  props: ["meta", "resolveExercise"],
  created: function() {
    console.log(this); // eslint-disable-line no-console
    // обновит статус пользователя, если он делает это упражнение в первый раз
    updateUserStatus();
    // показывает кнопку продолжить
    this.resolveExercise();
  }
};
</script>