<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user.loggedIn" class="alert alert-success" role="alert">You are logged in!</div>
            <button @click="cl">hello</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: aquamarine;
}
</style>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    cl() {
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        // Email sent.
        alert("email sent");
      });
    }
  }
};
</script>
