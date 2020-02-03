<template>
  <div class="feedback">
    <div class="container">
      <h2 class="section-title">Есть вопросы?</h2>
      <form class="feedback-form" action="#" @submit.prevent="submit">
        <div class="feedback-form-group">
          <label for="fullname">Представьтесь, пожалуйста:</label>
          <input type="text" name="fullname" id="fullname" v-model="form.name" />
        </div>
        <div class="feedback-form-group">
          <label for="fullname">Электронная почта:</label>
          <input type="text" name="email" id="email" v-model="form.email" />
        </div>
        <div class="feedback-form-group">
          <label for="message">Текст обращения:</label>
          <textarea name="message" id="message" v-model="form.text"></textarea>
        </div>
        <div style="text-align:center">
          <input type="submit" class="btn" value="Отправить" />
        </div>
      </form>
    </div>
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<style scoped>
.feedback {
  padding-top: 60px;
  padding-bottom: 70px;
}

.feedback .section-title {
  margin: 0 auto;
  max-width: 350px;
}

.feedback p {
  margin: 0 auto;
  max-width: 600px;
}

.section-title {
  margin: 0;
  margin-right: 180px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: #707070;
}

.feedback-form {
  margin: 0 auto;
  margin-top: 30px;
  width: 630px;
}

.feedback-form-group {
  margin-bottom: 15px;
}

.feedback-form-group-left-part {
  float: left;
}

.feedback-form-group-right-part {
  float: right;
}

.feedback-form-group-left-part,
.feedback-form-group-right-part {
  width: 290px;
}

.feedback-form-group label {
  display: inline-block;
  padding: 5px 0;
  padding-left: 17px;
  font-size: 12px;
  text-transform: uppercase;
}

.feedback-form input[type="text"],
.feedback-form select,
.feedback-form textarea {
  box-sizing: border-box;
  width: 100%;
  height: 54px;
  padding: 9px 15px;
  font: inherit;
  color: inherit;
  border: 2px solid #d5d5d5;
}

.feedback-form input[type="text"]:hover,
.feedback-form select:hover,
.feedback-form textarea:hover {
  border-color: #bebebe;
}

.feedback-form input[type="text"]:focus,
.feedback-form select:focus,
.feedback-form textarea:focus {
  border-color: #8d745a;
  outline: none;
}

.feedback-form textarea {
  display: block;
  min-height: 120px;
}

.checkbox-area {
  margin-bottom: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 17px;
  border-bottom: 1px solid #d5d5d5;
}

.checkbox-area input[type="checkbox"] {
  margin: 0;
  margin-right: 5px;
}

.feedback-form .btn {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 9px 16px;
  margin-top: 40px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}
.feedback-form .btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.feedback-form .btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

@media screen and (max-width: 630px) {
  .feedback-form {
    width: initial;
    margin-left: 30px;
    margin-right: 30px;
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
      form: {
        name: "",
        email: "",
        text: ""
      },
      isModalVisible: false
    };
  },
  methods: {
    submit() {
      let self = this;
      let db = firebase.firestore();
      if (
        this.form.name === "" ||
        this.form.email === "" ||
        this.form.text === ""
      ) {
        self.$store.commit("changeModalText", {
          title: "Возникла ошибка.",
          text: "Пожалуйста, заполните все поля и попробуйте еще раз."
        });
        self.showModal();
        return;
      }
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
    }
  }
};
</script>
