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

export default {
  components: {
    codemirror
  },
  data() {
    return {
      terminalValue: "",
      code: "",
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
      this.terminalValue += `${text}`;
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
    submitCode: function() {
      return ""
    }
  },
  beforeCreate: async function() {
    const plugin0 = document.createElement("script");
    plugin0.setAttribute("src", "/skulpt.js");
    document.head.appendChild(plugin0);
    await new Promise(r => setTimeout(r, 400));
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