<template>
  <div class="container">
    <div class="header" v-bind:class="{ displayMenu: showedMenu }">
      <div class="header-logo">
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="rocketIconTitle"
          class="header-logo-icon"
        >
          <title id="rocketIconTitle">Rocket</title>
          <path
            d="M12.7526 9.92418C12.2059 10.2861 11.679 10.7057 11.1924 11.1924C10.4754 11.9093 10.4947 11.9482 9.85359 12.682M12.7526 9.92418C16.178 7.65685 20.3848 7.65685 20.3848 7.65685C20.3848 7.65685 20.3848 11.8636 18.1174 15.289M12.7526 9.92418L18.1174 15.289M18.1174 15.289C17.7555 15.8358 17.3359 16.3626 16.8492 16.8492C16.1323 17.5662 16.0934 17.5469 15.3596 18.188M6.11523 17.429C5.74278 17.9526 5.53552 18.2635 5.53552 18.2635L9.77816 22.5061C9.77816 22.5061 10.0891 22.2988 10.6127 21.9264M6.11523 17.429L2.70709 14.0208L8.36394 11.1924L9.85359 12.682M6.11523 17.429C6.83965 16.4105 8.18898 14.5874 9.85359 12.682M10.6127 21.9264L14.0208 25.3345L16.8492 19.6777L15.3596 18.188M10.6127 21.9264C11.6311 21.202 13.4542 19.8526 15.3596 18.188"
          />
          <path
            d="M5.00003 23C5.35031 21.5825 5.99994 21.0001 6.5 21.5C7.00003 22 6.41751 22.6497 5.00003 23Z"
          />
        </svg>
        <router-link
          class="header-logo-name"
          to="/"
          v-on:click.native="closeMenu()"
          >EXALLENGE</router-link
        >
      </div>
      <div class="nav-btn" v-on:click="toggleMenu">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <ul class="main-nav">
        <li>
          <router-link to="/courses" v-on:click.native="toggleMenu()"
            >Курсы</router-link
          >
        </li>
        <li>
          <router-link to="/reviews" v-on:click.native="toggleMenu()"
            >Отзывы</router-link
          >
        </li>
        <li>
          <router-link to="/feedback" v-on:click.native="toggleMenu()"
            >Написать нам</router-link
          >
        </li>
      </ul>
      <template v-if="user.loggedIn">
        <li>
          <router-link to="/user" v-on:click.native="toggleMenu()">{{
            user.data.displayName
          }}</router-link>
        </li>
        <li>
          <a @click.prevent="signOut">Выйти</a>
        </li>
      </template>
      <template v-else>
        <li>
          <router-link to="/login" v-on:click.native="toggleMenu()"
            >Войти</router-link
          >
        </li>
        <li>
          <router-link to="/register" v-on:click.native="toggleMenu()"
            >Зарегестрироваться</router-link
          >
        </li>
      </template>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  padding-top: 25px;
  height: 70px;
  background-color: #ffffff;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.main-nav {
  display: flex;
  margin: 0;
  padding: 0;
  margin: 0 auto;
}

.nav-btn {
  display: none;
}

.header-logo-icon {
  width: 24px;
  height: 24px;
  stroke: #30b58b;
  stroke-width: 1;
  stroke-linecap: square;
  stroke-linejoin: miter;
  fill: none;
  color: #30b58b;
}

.header-logo a {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 23px;
  color: #505050;
  text-decoration: none;
  margin-top: 18px;
  margin-right: 20px;
}

li {
  margin-right: 50px;
  text-transform: uppercase;
  margin-top: 8px;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #505050;
}

@media only screen and (max-width: 1200px) {
  .container {
    width: initial;
  }
}

@media only screen and (max-width: 1000px) {
  .header {
    display: block;
  }
  .main-nav {
    display: block;
    padding-top: 20px;
  }

  .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 15px;
  }
  .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #505050;
  }
  li {
    width: 100%;
    margin-top: 0px;
    padding-top: 12px;
    padding-left: 25px;
    padding-bottom: 10px;
    position: relative;
    background-color: #ffffff;
    font-size: 18px;
    border-bottom: 1px solid #505050;
  }
  .displayMenu li {
    display: none;
  }
}
</style>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data: function() {
    return { showedMenu: true }; // eslint-disable-line no-unused-labels
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    },
    toggleMenu() {
      this.showedMenu = !this.showedMenu;
    },
    closeMenu() {
      this.showedMenu = true;
    }
  }
};
</script>
