<template>
  <div class="container">
    <div class="main-info">
      <div>
        Бесплатные курсы по программированию
        <br />
        <span class="tmp"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 400px;
  background: linear-gradient(
      90deg,
      rgba(48, 181, 139, 0.8) 0%,
      rgba(48, 181, 139, 0.8) 100%
    ),
    url(../assets/promo-image.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main-info {
  color: #ffffff;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  text-align: center;
}

.main-info div {
  padding-top: 120px;
}

.tmp {
  color: #ffffff;
}
.tmp:after {
  content: "";
  animation: change 7s linear infinite;
}
@keyframes change {
  0% {
    content: "в Москве";
  }
  20% {
    content: "в Санкт-Петербурге";
  }
  40% {
    content: "в Рязани";
  }
  60% {
    content: "в Краснодаре";
  }
  80% {
    content: "в Казани";
  }
  100% {
    content: "в онлайне";
  }
}

@media only screen and (max-width: 1200px) {
  .main-info {
    font-size: 35px;
    line-height: 45px;
  }
}

@media only screen and (max-width: 320px) {
  .main-info {
    font-size: 25px;
    line-height: 35px;
  }
}
</style>

<script>
export default {};
</script>
