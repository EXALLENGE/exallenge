<template>
  <div>
    <div class="feedback">
      <div class="container">
        <h2 class="section-title">Войти</h2>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form class="feedback-form" action="#" @submit.prevent="submit">
          <div class="feedback-form-group">
            <label for="fullname">Электронная почта:</label>
            <input type="email" name="email" id="email" v-model="form.email" />
          </div>
          <div class="feedback-form-group">
            <label for="fullname">Пароль:</label>
            <input type="password" name="password" id="password" v-model="form.password" />
          </div>
          <div style="text-align:center">
            <input type="submit" class="btn" value="Отправить" />
            <br />
            <div class="reset-password">
              <router-link to="/forget-password">Забыли пароль?</router-link>
            </div>
            <div class="reset-password">
              <router-link to="/register">Еще не зарегестрированы?</router-link>
            </div>
          </div>
        </form>
      </div>
      <modal v-show="isModalVisible" @close="closeModal" />
    </div>
  </div>
</template>

<style scoped>
.feedback {
  min-height: 70vh;
  padding-top: 190px;
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
  text-align: center;
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

.feedback-form input[type="email"],
.feedback-form input[type="password"],
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

.reset-password {
  display: block;
  padding-top: 25px;
  font-size: 20px;
}

.reset-password a {
  text-decoration: none;
  color: #7d6038;
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

import {getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  components: {
    modal
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null,
      isModalVisible: false
    };
  },
  methods: {
    submit() {
      let self = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "CoursesPage" });
        })
        .catch(function() {
          self.$store.commit("changeModalText", {
            title: "Возникла ошибка.",
            text: "Проверьте интернет, введенные данные и попробуйте еще раз."
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
  },
  beforeCreate: function() {
    getUserInfo()
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
    });
  }
};
</script>
