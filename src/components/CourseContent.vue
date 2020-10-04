<template>
  <div>
    <ul v-for="chapter in course.chapters" :key="chapter.chapter_name">
      <CourseContentItem v-bind:chapter=chapter v-bind:course=course />
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
import CourseContentItem from "./CourseContentItem";

export default {
  components: {
    CourseContentItem,
  },

  props: ["course"],
};
</script>
