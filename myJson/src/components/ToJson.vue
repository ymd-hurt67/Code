<template>
  <div id="tojson">
      <div class="input">
          <textarea placeholder="在此输入json字符串或者XML字符串" rows="50" @input="transform(inputData)" v-model="inputData"></textarea>
      </div>
      <div class="output" v-highlight ref="output" id="output">
      </div>
  </div>
</template>

<script>
import X2JS from 'x2js/x2js.js'
import JSON from 'json5/lib/json5.js'
import jsonFormater from '../assets/js/jsonFormater.js'
import img1 from '../assets/images/Collapsed.gif'
import img2 from '../assets/images/Expanded.gif'

export default {
  name: 'ToJson',
  data () {
    return {
        inputData: '',
        result: undefined,
        img1: img1,
        img2: img2
        // { "data": { "test": "success", "result": "hangge.com", "_id": "123" } }
    }
  },
  methods: {
        isJSON(str) {
            if (typeof str == 'string') {
                try {
                    JSON.parse(str);
                    return true;
                } catch(e) {
                    return false;
                }
            }
            return false;  
        },
        transform(xmlstr){
            var state = 1;
            var x2js = new X2JS();
            var jsonObj = x2js.xml2js( xmlstr );
            if(jsonObj==null){
                if(this.isJSON(xmlstr)){
                    jsonObj = JSON.parse(xmlstr);
                }else{
                    state = 0;
                    jsonObj="SyntaxError: Unexpected data cannot be parsed."
                }
            }
            var options = {
                dom: '#output',
                tabSize: 2,
                quoteKeys: true,
                imgCollapsed: this.img1,
                imgExpanded: this.img2,
                isCollapsible: true
            };
            if(state == 1) {
               var jf = new jsonFormater(options);
               jf.doFormat(jsonObj); 
            }else{
                this.$refs.output.innerHTML= '<pre><code>'+jsonObj+'</code></pre>';
            }
        }
  }
}
</script>

<style scoped>
#tojson{
    font-size: 0;
    border-left: solid 1px #eee;
    border-right: solid 1px #eee; 
    border-bottom: solid 1px #eee;  
    overflow: hidden;
}
.input,.output{
    width: 50%;
    font-size: 16px;
}
.input{
    float: left;
    box-sizing: border-box;
    border-right:solid 1px #eee; 
}
.output{
    margin-left: 50%;
    box-sizing: border-box;
    padding: 20px;
    word-break:break-all;
    font-size: 14px;
}
.input textarea{
    width: 100%;
    border: none;
    resize: none;
    border-radius:5px; 
    outline:none;
    box-sizing: border-box;
    word-break:break-all; 
    overflow-y: auto;
    padding: 20px;
}
.input:hover{
    border:solid 1px lightblue; 
}
</style>