<template>
    <codemirror v-model="code" :options="cmOptions" />
</template>

<script>
import { codemirror } from 'vue-codemirror'
  // language
  import 'codemirror/mode/sql/sql.js'
  // base style
  import 'codemirror/lib/codemirror.css'

    // theme css
  import 'codemirror/theme/base16-light.css'
  
export default {
    components: {
        codemirror,
    },
    data () {
        return {
        code: 'const a = 10',
        cmOptions: {
            tabSize: 4,
            mode: 'text/x-sql',
            theme: 'base16-light',
            lineNumbers: true,
            line: true,
            // more CodeMirror options...
          }
        }
    }
}
</script>