<template>
  <div>
    <button class="submit-btn" v-on:click="runCode">Выполнить код</button>
    <button class="submit-btn" v-on:click="submitCode">
      Отправить задание
    </button>
  </div>
</template>

<style scoped>
.text-editor {
  border-radius: 15px;
  font-size: 18px;
  width: 100%;
}

.submit-btn {
  margin-left: 50px;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 40px;
  padding: 9px 21px;
  background: #fff;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}

.submit-btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.submit-btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}
</style>

<script>
import { updateUserStatus } from "../utils/getUserInfo";

export default {
  props: ["task", "resolveExercise"],
  data() {},
  methods: {
    runCode: function() {
      this.userRunCode = true;
      let self = this;
      self.terminalValue = "";
      var runUserCode = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, self.code, true);
      });
      runUserCode.then(
        function(mod) {
          console.log(mod); // eslint-disable-line no-console
        },
        function(err) {
          self.terminalValue = err.toString();
          console.log(err.toString()); // eslint-disable-line no-console
        }
      );
    },
    submitCode: async function() {
      this.userRunCode = false;
      this.finishedWithError = false;
      let self = this;
      self.terminalValue = "";
      const taskTestsCopy = { ...this.task };
      for (const taskTestCopy in taskTestsCopy.test_cases) {
        console.log(taskTestCopy); // eslint-disable-line no-console
        let taskCase = taskTestsCopy.test_cases[taskTestCopy];
        this.serverInput = [...taskCase.input];
        this.serverOutput = [...taskCase.output];
        this.userOutput = [];
        var runUserCode = Sk.misceval.asyncToPromise(function() {
          return Sk.importMainWithBody("<stdin>", false, self.code, true);
        });
        runUserCode.then(
          function(mod) {
            console.log(mod); // eslint-disable-line no-console
            if (
              JSON.stringify(self.serverOutput) !=
              JSON.stringify(self.userOutput)
            ) {
              self.terminalValue += `${taskTestCopy} - error \n`;
              self.terminalValue += `Логическая ошибка \n`;
              console.log("logic err"); // eslint-disable-line no-console
              self.finishedWithError = true;
            } else {
              self.terminalValue += `${taskTestCopy} - pass \n`;
            }
          },
          function(err) {
            self.terminalValue += `${taskTestCopy} - error \n`;
            self.terminalValue += `${err.toString()} \n`;
            self.finishedWithError = true;
            console.log(err.toString()); // eslint-disable-line no-console
          }
        );
        await new Promise((r) => setTimeout(r, 20));
        if (self.finishedWithError) return;
      }
      self.terminalValue += `================================ \n`;
      self.terminalValue += `Поздравляем! \n`;
      self.terminalValue += `Вы выполнили упражнение и можете двигаться дальше.\nНажмите кнопку "Далее", чтобы продолжить \n`;
      // обновит статус пользователя, если он делает это упражнение в первый раз
      updateUserStatus();
      // показывает кнопку продолжить
      this.resolveExercise();
      console.log("OK"); // eslint-disable-line no-console
      return "";
    },
  },
};
</script>
