<template>
  <div>
    <form action="#" @submit.prevent="submit">
      <h2>Ваш город</h2>
      <div class="checkboxes">
        <label class="container_checkbox">
          Москва
          <input type="radio" name="city" value="Москва" v-model="picked" />
          <span class="checkmark"></span>
        </label>
        <label class="container_checkbox">
          Санкт-Петербург
          <input type="radio" name="city" value="Санкт-Петербург" v-model="picked" />
          <span class="checkmark"></span>
        </label>
        <label class="container_checkbox">
          Рязань
          <input type="radio" name="city" value="Рязань" v-model="picked" />
          <span class="checkmark"></span>
        </label>
        <label class="container_checkbox">
          Краснодар
          <input type="radio" name="city" value="Краснодар" v-model="picked" />
          <span class="checkmark"></span>
        </label>
        <label class="container_checkbox">
          Казань
          <input type="radio" name="city" value="Казань" v-model="picked" />
          <span class="checkmark"></span>
        </label>
        <label class="container_checkbox">
          Онлайн-формат
          <input type="radio" name="city" value="Онлайн-формат" v-model="picked" />
          <span class="checkmark"></span>
        </label>
      </div>
      <h2>Ваш номер</h2>
      <input class="input" v-model="value" @input="acceptNumber" />
      <br />
      <input type="submit" class="btn" value="Отправить" />
    </form>
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<style scoped>
.container_checkbox {
  display: table;
  position: relative;
  padding-left: 45px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 40px;
}

/* Hide the browser's default radio button */
.container_checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border: solid 2px #979797;
  background: #fff;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container_checkbox:hover input ~ .checkmark {
  border: solid 2px #000000;
}

/* When the radio button is checked, add a blue background */
.container_checkbox input:checked ~ .checkmark {
  background-color: #fff;
  border: solid 2px #a38b70;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container_checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container_checkbox .checkmark:after {
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #a38b70;
}

.input {
  box-sizing: border-box;
  width: 40%;
  height: 54px;
  padding: 9px 15px;
  font: inherit;
  color: inherit;
  border: 2px solid #d5d5d5;
}

.btn {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 9px 16px;
  margin-top: 40px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}
.btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

@media screen and (max-width: 630px) {
  .input {
    width: initial;
  }
}
</style>

<script>
import firebase from "firebase";

import modal from "./Modal";

export default {
  components: {
    modal
  },
  data() {
    return {
      value: "",
      picked: "",
      isModalVisible: false
    };
  },
  methods: {
    submit() {
      console.log(this.value, this.picked); // eslint-disable-line no-console
      let self = this;
      let db = firebase.firestore();
      // Add a new document in collection "cities"
      db.collection("feedback")
        .add({
          name: this.form.name,
          email: this.form.email,
          text: this.form.text
        })
        .then(function() {
          self.$store.commit("changeModalText", {
            title: "Спасибо большое!",
            text: "Мы получили ваше сообщение и в ближайшее время ответим вам."
          });
          self.showModal();
        })
        .catch(function() {
          self.$store.commit("changeModalText", {
            title: "Возникла ошибка.",
            text:
              "Возможно у вас проблемы с интернетом, проверьте соединение и попробуйте еще раз."
          });
          self.showModal();
        });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    acceptNumber() {
      this.value = this.value
        .replace(/[^0-9]/g, "")
        .slice(0, 11)
        .replace(
          /(\d{1,1})(\d{1,3})(\d{1,3})(\d{1,2})(\d{1,2})/,
          "$1 ($2) $3-$4-$5"
        );
    }
  }
};
</script>
