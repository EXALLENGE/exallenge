<template>
  <div>
    <li class="chapter-title" v-on:click="message">
      {{ chapter.chapter_name }}
    </li>
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
</template>

<style>
/* 1. найти и перенести стили
   2.  сделать крестик справа от списка и перенести функцию нажатия на него (командная строка)*/
   .hidden {
  display: none;
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
  }
};
</script>
