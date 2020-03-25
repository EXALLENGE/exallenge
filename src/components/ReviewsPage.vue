<template>
  <div class="reviews">
    <div class="container">
      <h2 class="section-title">Отзывы</h2>
      <div class="reviews-list">
        <blockquote class="review-item">
          <p>
            Большое спасибо ребятам за очный курс по python! Часто засиживались
            уже после пар чтобы разобрать домашку или задать вопросы по лекции.
          </p>
          <cite class="review-author">Глеб, г. Москва</cite>
        </blockquote>
        <blockquote class="review-item">
          <p>
            Лично я постоянно теряю фокус и начинаю отвлекаться. Но ребята
            построили общение так, что я все равно все усвоил и понял. Спасибо
            большое!
          </p>
          <cite class="review-author">Олег, г. Москва</cite>
        </blockquote>
        <blockquote class="review-item">
          <p>
            Я отучилась в институте 4 года, но так и не получила необходимой
            базы для работы. Спасибо ребятам за то, что смогли выявить мои
            пробелы и помоголи их закрыть. После курсов я с легкостью начала
            карьеру разработчика!
          </p>
          <cite class="review-author">Яна, г. Казань</cite>
        </blockquote>
        <blockquote class="review-item">
          <p>
            Когда я попал на курсы, я уже работал в одной компании на стажерской
            позиции. Но я понимал, что не развиваюсь как профессионал. Спасибо
            большое ребятам за то, что дали мощный толчок для моей карьеры и
            задали вектор для последующего развития.
          </p>
          <cite class="review-author">Александр, г. Казань</cite>
        </blockquote>
        <blockquote class="review-item">
          <p>
            По профессии я раньше была UI/UX-дизайнером. Но для карьерного роста
            мне потребовались знания фронтенд-разработки. Я пыталась разобраться
            в этом всем сама, но у меня не хватило ни денег, ни терпения. Только
            потом я узнала про курсы от EXALLENGE. И в итоге ребятам правда
            удалось объяснить мне все нетривиальные вещи и помочь с карьерой.
          </p>
          <cite class="review-author">Ольга, г. Санкт-Петербург</cite>
        </blockquote>
        <blockquote class="review-item">
          <p>
            Вообще я уже проходил курсы по программированию до этого. Но они все
            были в интернете и толку от них было не очень много. Очные же курсы
            во многом повторяли рабочий процесс и помоголи мне гораздо быстрее
            освоиться на своей работе после курсов.
          </p>
          <cite class="review-author">Павел, г. Санкт-Петербург</cite>
        </blockquote>
        <blockquote class="review-item">
          <p>
            Мне очень нравится программирование, но у нас в городе раньше вообще
            не было никаких курсов. Спасибо ребятам за то, что приезжали к нам в
            город и читали курс по питону.
          </p>
          <cite class="review-author">Игорь, г. Рязань</cite>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1020px;
  margin: 0 auto;
  position: relative;
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

.reviews {
  min-height: 70vh;
  padding-top: 190px;
  padding-bottom: 90px;
}

.to-all-reviews {
  position: absolute;
  top: 0;
  right: 0;

  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 18px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}

.to-all-reviews:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.to-all-reviews:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

.reviews-list {
  display: flex;
}

.review-item {
  width: 377px;
  margin: 0;
  margin-top: 30px;
  margin-right: 80px;
  padding: 0;
  padding-left: 50px;
  border-left: 3px solid #a38b70;
}

.review-item p {
  font-size: 17px;
  margin: 0;
  margin-bottom: 15px;
}

.review-item cite {
  font-size: 16px;
}

.review-author {
  font-weight: bold;
  font-style: italic;
}

.reviews-list {
  display: block;
}
.review-item {
  width: initial;
  margin: 0;
  margin-top: 30px;
  margin-right: 80px;
  padding: 0;
  padding-left: 50px;
  border-left-color: transparent;
}

@media screen and (max-width: 1020px) {
  .container {
    width: initial;
    padding-right: 20px;
    padding-left: 20px;
  }
  .to-all-reviews {
    top: 10px;
    right: 20px;
  }
}

@media screen and (max-width: 750px) {
  .reviews-list {
    display: block;
  }
  .review-item {
    width: initial;
    margin: 0;
    margin-right: 80px;
    padding: 0;
    padding-left: 50px;
    border-left-color: transparent;
  }
}

@media screen and (max-width: 420px) {
  .review-item {
    padding-left: 0px;
    margin-right: 0px;
  }
  .to-all-reviews {
    display: none;
  }
  .section-title {
    margin-right: 0px;
  }
}
</style>

<script>
import firebase from "firebase";

import { getUserInfo, checkRouter } from "../utils/getUserInfo";

export default {
  beforeCreate: function() {
    getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch("fetchUser", user);
      checkRouter();
    });
  }
};
</script>
