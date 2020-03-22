<template>
    <codemirror v-model="code" :options="cmOptions" />
</template>

<script>
import { codemirror } from 'vue-codemirror'

  // base style
  import 'codemirror/lib/codemirror.css'
  
export default {
    components: {
        codemirror,
    },
    data () {
        return {
        code: 'const a = 10',
        cmOptions: {
            tabSize: 4,
            mode: 'text/javascript',
            theme: 'base16-dark',
            lineNumbers: true,
            line: true,
            // more CodeMirror options...
          }
        }
    }
}
</script>