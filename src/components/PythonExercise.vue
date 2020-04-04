<template>
  <div>
    <p>Редактор кода</p>
    <div class="text-editor">
      <codemirror v-model="code" :options="cmOptions" />
    </div>
    <p>Терминал</p>
    <div class="text-editor">
      <codemirror v-model="terminalValue" :options="cmOptions" />
    </div>
    <button class="submit-btn" v-on:click="runCode">Выполнить код</button>
    <button class="submit-btn" v-on:click="submitCode">Отправить задание</button>
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
import { codemirror } from "vue-codemirror";
// language
import "codemirror/mode/python/python.js";
// base style
import "codemirror/lib/codemirror.css";
// theme css
import "codemirror/theme/base16-light.css";

import { updateUserStatus } from "../utils/getUserInfo";

export default {
  props: ["task", "resolveExercise"],
  components: {
    codemirror
  },
  data() {
    return {
      userRunCode: true,
      terminalValue: "",
      code: "",
      serverInput: [],
      serverOutput: [],
      userOutput: [],
      finishedWithError: false,
      cmOptions: {
        tabSize: 4,
        mode: "text/x-python",
        theme: "base16-light",
        lineNumbers: true,
        line: true
        // more CodeMirror options...
      }
    };
  },
  methods: {
    printCode: function(text) {
      if (this.userRunCode) {
        this.terminalValue += `${text}`;
      } else {
        if (text != "\n") {
          this.userOutput.push(text);
        }
      }
    },
    inputCode: function(message) {
      return new Promise(resolve => {
        console.log(message); // eslint-disable-line no-console
        // ToDo: output prompt
        // ToDo: get input string
        let input = prompt(message);
        resolve(input);
      });
    },
    builtinRead: function(x) {
      if (
        Sk.builtinFiles === undefined ||
        Sk.builtinFiles["files"][x] === undefined
      )
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles["files"][x];
    },
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
        this.serverInput = taskCase.input;
        this.serverOutput = taskCase.output;
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
        await new Promise(r => setTimeout(r, 20));
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
    }
  },
  beforeCreate: async function() {
    const plugin0 = document.createElement("script");
    plugin0.setAttribute("src", "/skulpt.js");
    document.head.appendChild(plugin0);
    await new Promise(r => setTimeout(r, 200));
    console.log(Sk); // eslint-disable-line no-console

    Sk.configure({
      inputfun: this.inputCode,
      inputfunTakesPrompt: true,
      /* then you need to output the prompt yourself */
      output: this.printCode,
      read: this.builtinRead
    });
  }
};
</script>