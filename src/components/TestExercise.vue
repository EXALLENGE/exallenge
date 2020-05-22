<template>
  <div>
    <input v-model="answer" type="text" />
    <button class="submit-btn" v-on:click="submit">Проверить</button>
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<style scoped>
input {
  box-sizing: border-box;
  width: 50%;
  height: 54px;
  padding: 9px 15px;
  font: inherit;
  color: inherit;
  border: 2px solid #d5d5d5;
}

.submit-btn {
  margin-left: 50px;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 40px;
  padding: 9px 21px;
  background: #fff;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}

.submit-btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.submit-btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}
</style>

<script>
import modal from "./Modal";

import { updateUserStatus } from "../utils/getUserInfo";

export default {
  components: {
    modal
  },
  props: ["task", "resolveExercise"],
  data() {
    return {
      answer: "",
      isModalVisible: false
    };
  },
  methods: {
    submit: async function() {
      if (this.task.meta.task_info.right_answer == this.answer) {
        this.$store.commit("changeModalText", {
          title: "Верно!",
          text: "Вы ввели правильный ответ. Продолжайте в том же духе)"
        });
        this.showModal();
        // обновит статус пользователя, если он делает это упражнение в первый раз
        updateUserStatus();
        // показывает кнопку продолжить
        this.resolveExercise();
        console.log("OK"); // eslint-disable-line no-console
        return "";
      } else {
        this.$store.commit("changeModalText", {
          title: "Ошибка",
          text: "Кажется, вы ввели неправильный ответ. Попробуйте еще раз!"
        });
        this.showModal();
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>