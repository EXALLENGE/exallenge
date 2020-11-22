<template>
  <div>
    <vue-friendly-iframe :src="iframeUrl"></vue-friendly-iframe>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      iframeUrl: "",
    };
  },
  mounted() {
    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
    let tmpId = makeid(15);
    this.iframeUrl = `https://exallenge-tasks.web.app/?taskId=${tmpId}&taskMeta=${this.$route.params.course}_${this.$route.params.course}`;
    let db = firebase.firestore();
    db.collection("tmpTasks")
      .doc(tmpId)
      .set({
        finished: false,
      })
      .then(function() {
        firebase
          .firestore()
          .collection("tmpTasks")
          .doc(tmpId)
          .onSnapshot(function(doc) {
            console.log("Current data: ", doc.data()); // eslint-disable-line no-console
          });
      })
      .catch(function(error) {
        console.error("Error writing document: ", error); // eslint-disable-line no-console
      });
  },
};
</script>

<style></style>
