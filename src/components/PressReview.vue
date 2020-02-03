<template>
  <div class="press-review">
    <div class="wrapper">
      <h2 class="section-title">О нас</h2>
      <blockquote>
        <p>Вам наверное интересно как мы начали читать лекции и зачем мы это делаем. В этой статье на медиуме мы рассказали о нашей мотивации и о самих курсах.</p>
        <div>
          <cite>Блог на Medium</cite>
          <a class="btn" href="#">Читать</a>
        </div>
      </blockquote>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  margin: 0;
  margin-right: 180px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: #707070;
}
.wrapper {
  width: 800px;
  margin: 0 auto;
}

.press-review {
  padding-top: 40px;
  padding-bottom: 60px;

  background: #f2f2f2;
}

.press-review blockquote {
  font-size: 16px;

  position: relative;

  margin: 0;
  margin-top: 22px;
}

.press-review blockquote div {
  margin-top: 50px;
}

.press-review p:before {
  position: absolute;
  top: 7px;
  left: -105px;

  display: block;

  width: 18px;
  height: 30px;

  content: "";

  border-radius: 0 0 9px 0;
  background-color: #d6cec3;
  box-shadow: 23px 0 0 #d6cec3;
}

.press-review p:after {
  position: absolute;
  top: 25px;
  left: -105px;

  display: block;

  width: 8px;
  height: 12px;

  content: "";

  background-color: #f2f2f2;
  box-shadow: 23px 0 0 #f2f2f2;
}

.press-review p {
  font-size: 17px;
  line-height: 19px;
  padding-right: 110px;
}

.press-review .btn {
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 40px;
  padding: 9px 21px;

  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}

.press-review .btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.press-review .btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

.press-review cite {
  font-size: 20px;
  font-weight: bold;
  font-style: normal;

  position: absolute;
  right: 0;
  bottom: 9px;

  text-transform: uppercase;
}

@media screen and (max-width: 1050px) {
  .wrapper {
    width: initial;
  }

  .press-review {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 400px) {
  .press-review cite {
    display: none;
  }
  .press-review p {
    padding-right: 0px;
  }
  .section-title {
    margin-right: 0px;
  }
}
</style>

<script>
export default {};
</script>
