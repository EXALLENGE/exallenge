<template>
<div class="text-editor">
    <codemirror v-model="code" :options="cmOptions" />
    <button class="submit-btn" v-on:click="submitCode">Отправить задание</button>
</div>
</template>

<style scoped>

.text-editor {
  border-radius: 15px;
  font-size: 18px;
  width: 1200px;
}

.text-editor {
  margin-left: 2%;
  margin-right: 10%;
  margin-top: 50px;
  margin-bottom: 50px;
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
import { codemirror } from 'vue-codemirror'
  // language
  import 'codemirror/mode/sql/sql.js'
    import 'codemirror/mode/python/python.js'
  // base style
  import 'codemirror/lib/codemirror.css'

    // theme css
  import 'codemirror/theme/base16-light.css'
  import 'codemirror/theme/base16-dark.css'
  
export default {
    props: ["submit", "theme", "lang"],
    components: {
        codemirror,
    },
    data () {
        return {
        code: '',
        cmOptions: {
            tabSize: 4,
            mode: this.lang,
            theme: this.theme,
            lineNumbers: true,
            line: true,
            // more CodeMirror options...
          }
        }
    },
    methods: {
      submitCode: function () {
          this.submit(this.code)
      }
    }
}
</script>