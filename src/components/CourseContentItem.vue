<template>
  <div>
    <li class="chapter-title" v-on:click="message">
      {{ chapter.chapter_name }}
    </li>
    <div class="accordion-ul__container">
    <svg class="accordion__icon" width="28" height="28">
      <use xlink:href="#icon-plus"></use>
    </svg>
    <use xlink:href="#icon-plus">
      <svg id="icon-plus" viewBox="0 0 16 16">
        <path
          d="M14.812 8a.62.62 0 0 1-.62.622h-5.57v5.57a.62.62 0 0 1-.622.62.62.62 0 0 1-.621-.62v-5.57h-5.57a.62.62 0 0 1-.62-.621.606.606 0 0 1 .618-.618h5.569v-5.57a.62.62 0 0 1 .18-.439.599.599 0 0 1 .438-.179.62.62 0 0 1 .622.621l.006 5.563h5.57c.344 0 .62.276.62.621z"
          fill="currentColor"
        ></path>
      </svg>
    </use>
    <ul
      v-for="chapteritem in chapter.chapterItems"
      :key="chapteritem.title"
      v-bind:class="{ hidden: show }"
    >
      <li
        class="chapter-item"
        v-bind:class="{ finished: chapteritem.finished }"
      >
        <a :href="generateUrl(course, chapteritem)">{{ chapteritem.title }}</a>
      </li>
    </ul>
    </div>
  </div>
</template>

<style>
/* 1. найти и перенести стили из CourseContent. Перенести стили вдумчиво (exallenge.web.app)
   2.  сделать крестик справа от списка и перенести функцию нажатия на него (командная строка)
   3. можно убрать флекс из accordion-ul__container*/
.hidden {
  display: none;
}

.accordion-ul__container {
  display: flex;
  flex-direction: column;  
  
}

.accordion__icon {
  border: 1px solid #000;
  border-radius: 50%;
  align-self: flex-end;
  /* margin-left: 1000px; */
}

.chapter-title {
  font-size: 22px;
}

.chapter-item {
  font-size: 20px;
  line-height: 28px;
}

ul {
  list-style: none;
  display: flex;
}

ul li::before {
  content: "\2022";
  color: black;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

ul li.chapter-item::before {
  color: #30b58b;
}

ul li.finished a {
  color: #30b58b;
}

a {
  text-decoration: none;
  color: initial;
}
</style>

<script>
export default {
  props: ["chapter", "course"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    generateUrl(course, chapteritem) {
      console.log(`${course.chapter_name}/${chapteritem.title}`); // eslint-disable-line no-console
      return `/course/${course.courseId}/${chapteritem.taskNum}`;
    },
    message() {
      console.log(this.show); // eslint-disable-line no-console
      this.show = !this.show;
    },
  },
};
</script>
