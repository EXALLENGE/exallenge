<template>
  <div>
    <ul v-for="chapter in course.chapters" :key="chapter.chapter_name">
      <li class="chapter-title">{{chapter.chapter_name}}</li>
      <ul v-for="chapteritem in chapter.chapterItems" :key="chapteritem.title">
        <li class="chapter-item" v-bind:class="{ finished: chapteritem.finished }">
          <a :href="generateUrl(course, chapteritem)">{{chapteritem.title}}</a>
        </li>
      </ul>
    </ul>
  </div>
</template>

<style scoped>
.chapter-title {
  font-size: 22px;
}

.chapter-item {
  font-size: 20px;
  line-height: 28px;
}
ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: black;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

ul li.finished::before {
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
  props: ["course"],
  methods: {
    generateUrl(course, chapteritem) {
      console.log(`${course.chapter_name}/${chapteritem.title}`) // eslint-disable-line no-console
      return `/course/${course.courseId}/${chapteritem.taskNum}`
    }
  }
};
</script>