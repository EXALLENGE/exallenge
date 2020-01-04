<template>
  <div>
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
    <footerbar></footerbar>
  </div>
</template>
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
