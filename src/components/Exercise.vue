<template>
  <div>
    <div v-if="this.metaInTask">
      {{this.task.meta}}
      <NoExercise v-if="this.taskType ==='NT'"></NoExercise>
      <OpenAnswerExercise v-if="this.taskType ==='OT'"></OpenAnswerExercise>
      <PythonExercise v-if="this.taskType ==='PT'"></PythonExercise>
      <SqlExercise v-if="this.taskType ==='ST'"></SqlExercise>
    </div>
  </div>
</template>

<script>
import NoExercise from "./NoExercise";
import OpenAnswerExercise from "./OpenAnswerExercise";
import PythonExercise from "./PythonExercise";
import SqlExercise from "./SqlExercise";

export default {
  components: {
    NoExercise,
    OpenAnswerExercise,
    PythonExercise,
    SqlExercise
  },
  props: ["task"],
  computed: {
    metaInTask() {
      if ("meta" in this.task) {
        return true;
      }
      return false;
    },
    taskType() {
      if ("meta" in this.task) {
        return this.task.meta.task_type;
      }
      return "";
    }
  }
};
</script>

<style scoped>
</style>