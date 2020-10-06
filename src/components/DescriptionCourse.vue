<template>
  <div class="popular-and-price">
    <div class="container">
      <h2 class="section-title" v-html="courseInfo.name"></h2>
      <a
        class="btn to-all-reviews"
        v-bind:href="courseInfo.lastTaskUrl"
        title="Продолжить"
        v-if="courseInfo.enrolled"
        >Продолжить</a
      >
      <a
        class="btn to-all-reviews"
        :href="`/enroll/${this.$route.params.course}`"
        title="Присоедениться"
        v-else
        >Присоедениться</a
      >
      <p>{{ courseInfo.description }}</p>
      <CoursesContent :course="courseInfo" />
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
.popular-and-price {
  min-height: 70vh;
  padding-top: 190px;
  padding-bottom: 90px;
}

.container {
  width: 1000px;
  margin: 0 auto;
  position: relative;
}

.section-title {
  padding-left: 20px;
}

p {
  font-size: 22px;
  padding-left: 20px;
}

a {
  color: #a38b70;
  text-decoration: none;
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

@media only screen and (max-width: 1050px) {
  .section-title {
    padding-left: 20px;
  }

  .popular-items {
    display: block;
  }
  .container {
    width: initial;
  }
  .catalog-item {
    width: initial;
    border: initial;
  }
  .catalog-item h3 {
    max-width: initial;
  }
  .catalog-item p {
    font-size: 16px;
    height: initial;
  }
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
  .to-all-reviews {
    display: none;
  }
  .section-title {
    margin-right: 0px;
  }
}
</style>

<script>
// import firebase from "firebase";
import { mapGetters } from "vuex";

import CoursesContent from "./CourseContent";

import {
  // getUserInfo,
  // checkRouter,
  convertCourseResponseStruncture,
} from "../utils/getUserInfo";

export default {
  components: {
    CoursesContent,
  },
  data() {
    return {
      course: {
      "1": {
        "1": {
          meta: {
            task_type: "NT",
            need_program_check: false,
            need_teacher_check: false,
            task_name: "Введение",
          },
        },
        "2": {
          meta: {
            task_type: "NT",
            need_program_check: false,
            task_name: "Командная строка",
            need_teacher_check: false,
          },
        },
        "3": {
          meta: {
            need_teacher_check: false,
            task_name: "Структура файловой системы",
            task_type: "NT",
            need_program_check: false,
          },
        },
        "4": {
          meta: {
            need_teacher_check: false,
            task_type: "NT",
            task_name: "Вывод рабочего каталога (pwd)",
            need_program_check: false,
          },
        },
        "5": {
          meta: {
            need_teacher_check: false,
            task_type: "NT",
            task_name: "Список (ls)",
            need_program_check: false,
          },
        },
        "6": {
          meta: {
            need_program_check: false,
            task_name: "Изменить каталог (cd)",
            need_teacher_check: false,
            task_type: "NT",
          },
        },
        "7": {
          meta: {
            need_program_check: false,
            need_teacher_check: false,
            task_name: "Сделать директорию (mkdir)",
            task_type: "NT",
          },
        },
        "8": {
          meta: {
            task_name: "Создать новый файл (touch)",
            task_type: "NT",
            need_program_check: false,
            need_teacher_check: false,
          },
        },
        "9": {
          meta: {
            need_teacher_check: false,
            task_name: "Итоги",
            task_type: "NT",
            need_program_check: false,
          },
        },
        meta: {
          description: "",
          chapter_name: "Навигация по файловой системе",
        },
      },
      "2": {
        "1": {
          meta: {
            task_type: "NT",
            need_teacher_check: false,
            need_program_check: false,
            task_name: "Параметры команд",
          },
        },
        "2": {
          meta: {
            task_type: "NT",
            task_name: "Параметры команды ls",
            need_teacher_check: false,
            need_program_check: false,
          },
        },
        "3": {
          meta: {
            need_teacher_check: false,
            task_name: "Копировать (cd)",
            need_program_check: false,
            task_type: "NT",
          },
        },
        "4": {
          meta: {
            need_teacher_check: false,
            task_type: "NT",
            task_name: "Копировать (cd)",
            need_program_check: false,
          },
        },
        "5": {
          meta: {
            task_type: "NT",
            task_name: "Удалить (rm)",
            need_teacher_check: false,
            need_program_check: false,
          },
        },
        "6": {
          meta: {
            need_teacher_check: false,
            task_name: "Итоги",
            need_program_check: false,
            task_type: "NT",
          },
        },
        meta: {
          description: "",
          chapter_name: "Просмотр и изменение элементов файловой системы",
        },
      },
      meta: {
        promo_code: "HSE",
        price: "0",
        description:
          "Командная строка - это быстрый, мощный текстовый интерфейс, который разработчики используют для более эффективной и действенной связи с компьютерами для выполнения более широкого набора задач.",
        course_name: "Командная строка.<br />Базовый курс",
      },
    },
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),

    courseInfo() {
      return convertCourseResponseStruncture(
        this.course,
        this.user,
        this.$route.params.course
      );
    },
  },
  beforeCreate: function() {
    this.course = {
      "1": {
        "1": {
          meta: {
            task_type: "NT",
            need_program_check: false,
            need_teacher_check: false,
            task_name: "Введение",
          },
        },
        "2": {
          meta: {
            task_type: "NT",
            need_program_check: false,
            task_name: "Командная строка",
            need_teacher_check: false,
          },
        },
        "3": {
          meta: {
            need_teacher_check: false,
            task_name: "Структура файловой системы",
            task_type: "NT",
            need_program_check: false,
          },
        },
        "4": {
          meta: {
            need_teacher_check: false,
            task_type: "NT",
            task_name: "Вывод рабочего каталога (pwd)",
            need_program_check: false,
          },
        },
        "5": {
          meta: {
            need_teacher_check: false,
            task_type: "NT",
            task_name: "Список (ls)",
            need_program_check: false,
          },
        },
        "6": {
          meta: {
            need_program_check: false,
            task_name: "Изменить каталог (cd)",
            need_teacher_check: false,
            task_type: "NT",
          },
        },
        "7": {
          meta: {
            need_program_check: false,
            need_teacher_check: false,
            task_name: "Сделать директорию (mkdir)",
            task_type: "NT",
          },
        },
        "8": {
          meta: {
            task_name: "Создать новый файл (touch)",
            task_type: "NT",
            need_program_check: false,
            need_teacher_check: false,
          },
        },
        "9": {
          meta: {
            need_teacher_check: false,
            task_name: "Итоги",
            task_type: "NT",
            need_program_check: false,
          },
        },
        meta: {
          description: "",
          chapter_name: "Навигация по файловой системе",
        },
      },
      "2": {
        "1": {
          meta: {
            task_type: "NT",
            need_teacher_check: false,
            need_program_check: false,
            task_name: "Параметры команд",
          },
        },
        "2": {
          meta: {
            task_type: "NT",
            task_name: "Параметры команды ls",
            need_teacher_check: false,
            need_program_check: false,
          },
        },
        "3": {
          meta: {
            need_teacher_check: false,
            task_name: "Копировать (cd)",
            need_program_check: false,
            task_type: "NT",
          },
        },
        "4": {
          meta: {
            need_teacher_check: false,
            task_type: "NT",
            task_name: "Копировать (cd)",
            need_program_check: false,
          },
        },
        "5": {
          meta: {
            task_type: "NT",
            task_name: "Удалить (rm)",
            need_teacher_check: false,
            need_program_check: false,
          },
        },
        "6": {
          meta: {
            need_teacher_check: false,
            task_name: "Итоги",
            need_program_check: false,
            task_type: "NT",
          },
        },
        meta: {
          description: "",
          chapter_name: "Просмотр и изменение элементов файловой системы",
        },
      },
      meta: {
        promo_code: "HSE",
        price: "0",
        description:
          "Командная строка - это быстрый, мощный текстовый интерфейс, который разработчики используют для более эффективной и действенной связи с компьютерами для выполнения более широкого набора задач.",
        course_name: "Командная строка.<br />Базовый курс",
      },
    };

    // getUserInfo();
    // firebase.auth().onAuthStateChanged(user => {
    //   this.$store.dispatch("fetchUser", user);
    //   checkRouter();
    // });
    // firebase
    //   .firestore()
    //   .collection("coursesContent")
    //   .doc(this.$route.params.course)
    //   .get()
    //   .then(doc => {
    //     this.course = doc.data();
    //   })
    //   .catch(err => {
    //     alert("Error getting documents", err);
    //   });
  },
};
</script>
