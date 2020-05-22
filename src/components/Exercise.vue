<template>
  <div class="container">
    <div v-if="this.metaInTask">
      <NoExercise v-if="this.taskType ==='NT'" :task="this.task" :resolveExercise="resolveExercise"></NoExercise>
      <OpenAnswerExercise v-if="this.taskType ==='OT'" :task="this.task"></OpenAnswerExercise>
      <PythonExercise v-if="this.taskType ==='PT'" :task="this.task" :resolveExercise="resolveExercise"></PythonExercise>
      <SqlExercise v-if="this.taskType ==='ST'" :task="this.task"></SqlExercise>
      <TestExercise v-if="this.taskType ==='TT'" :task="this.task" :resolveExercise="resolveExercise"></TestExercise>
      <button v-if="this.showNextTaskLink" class="submit-btn" v-on:click="nextTask">Продолжить</button>
    </div>
  </div>
</template>

<script>
import NoExercise from "./NoExercise";
import OpenAnswerExercise from "./OpenAnswerExercise";
import PythonExercise from "./PythonExercise";
import SqlExercise from "./SqlExercise";
import TestExercise from "./TestExercise";

export default {
  components: {
    NoExercise,
    OpenAnswerExercise,
    PythonExercise,
    SqlExercise,
    TestExercise
  },
  props: ["task"],
  data() {
    return {
      showNextTaskLink: false
    };
  },
  computed: {
    metaInTask() {
      if ("meta" in this.task) {
        return true;
      }
      this.showNextTaskLink = false; // eslint-disable-line vue/no-side-effects-in-computed-properties
      return false;
    },
    taskType() {
      if ("meta" in this.task) {
        return this.task.meta.task_type;
      }
      return "";
    }
  },
  methods: {
    nextTask() {
      this.$router.push({
        path: `/course/${this.$route.params.course}/${parseInt(this.$route.params.task) + 1}`
      });
    },
    resolveExercise() {
      console.log(`12`) // eslint-disable-line no-console
      this.showNextTaskLink = true;
    }
  }
};
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  position: relative;
}

@media only screen and (max-width: 1200px) {
  .container {
    width: initial;
  }
}

.submit-btn {
  margin-left: 50px;
  margin-bottom: 180px;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 40px;
  padding: 9px 21px;
  background: #fff;
  color: #30b58b;
  border: 2px solid #30b58b;
  border-radius: 4px;
}

.submit-btn:hover {
  color: #30b58b;
  border: 2px solid #30b58b;
}

.submit-btn:active {
  color: #30b58b;
  border: 2px solid #30b58b;
}
</style>