<template>
  <div class="container">
    <div>
      <div class="feedback">
        <div class="container">
          <h2 class="section-title">Зарегестрироваться</h2>
          <form class="feedback-form" action="#" @submit.prevent="submit">
            <div class="feedback-form-group">
              <label for="fullname">Имя:</label>
              <input type="text" name="name" id="name" v-model="form.name" required autofocus />
            </div>
            <div class="feedback-form-group">
              <label for="fullname">Электронная почта:</label>
              <input type="email" name="email" id="email" v-model="form.email" required autofocus />
            </div>
            <div class="feedback-form-group">
              <label for="fullname">Пароль:</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                required
                autofocus
              />
            </div>
            <div style="text-align:center">
              <input type="submit" class="btn" value="Отправить" />
              <br />
            </div>
            <div class="reset-password">
              <router-link to="/login">Уже есть аккаунт?</router-link>
            </div>
          </form>
        </div>
        <modal v-show="isModalVisible" @close="closeModal" />
      </div>
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
  max-width: 450px;
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

.feedback-form input[type="text"],
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
  text-align: center;
  display: block;
  padding-top: 25px;
  font-size: 20px;
}

.reset-password a {
  text-decoration: none;
  color: #7d6038;
}

@media screen and (max-width: 630px) {
  .section-title {
    font-size: 25px;
    line-height: 35px;
  }
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
        password: ""
      },
      isModalVisible: false
    };
  },
  methods: {
    submit() {
      let self = this;

      console.log(123); // eslint-disable-line no-console
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {})
            .catch(() => {
              self.$store.commit("changeModalText", {
                title: "Возникла ошибка.",
                text:
                  "Проверьте интернет, введенные данные и попробуйте еще раз."
              });
              self.showModal();
            });
          data.user.sendEmailVerification().then(function() {
            self.$store.commit("changeModalText", {
              title: "Письмо отправлено.",
              text:
                "Подтвердите пожалуйста почту, чтобы начать пользоваться сервисом!"
            });
            self.showModal();
          });
        })
        .catch(() => {
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
  }
};
</script>
