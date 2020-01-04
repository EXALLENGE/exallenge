<template>
  <div class="page-container">
    <div class="content-wrap">
      <navbar></navbar>
      <main>
        <router-view></router-view>
      </main>
    </div>
    <footerbar class="footer"></footerbar>
  </div>
</template>
<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}

@media only screen and (min-width: 1200px) {
  .footer {
    height: 20rem;
  }
}
</style>
<script>
import navbar from "./components/Navbar";
import footerbar from "./components/FooterBar";
export default {
  components: {
    navbar,
    footerbar
  }
};
</script>
