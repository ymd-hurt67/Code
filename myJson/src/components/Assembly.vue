<template>
  <div id="assembly">
      <h2>Json常用组件</h2>

      <div class="zujian">
        <h3>Json5</h3>

        <p>开发者：<a href="https://json5.org/">https://json5.org/</a></p>

        <p>适用环境：不支持IE8一下浏览器。JSON5数据交换格式（JSON5）是JSON的超集，旨在通过扩展其语法以包括来自ECMAScript 5.1的一些产品来减轻JSON的一些限制。</p>

        <p>安装：<code>npm install json5</code></p>

        <p>引用：</p>
        <p>NPM</p>

        <p>const JSON5 = require('json5')</p>
        <p>浏览器</p>
        
        <p>&lt;script src=&quot;https://unpkg.com/json5@^1.0.0&quot;&gt;&lt;/script&gt;</p>
        <h4>API</h4>

        <p>序列化
        <code>JSON5.parse(text[, reviver])</code></p>

        <p>反序列化</p>

        <p><code>JSON5.stringify(value[, replacer[, space]])</code></p>

        <p><code>JSON5.stringify(value[, options])</code></p>
        <h3>x2js</h3>

        <p>开发者：<a href="https://www.npmjs.com/package/x2js">https://www.npmjs.com/package/x2js</a></p>

        <p>作用：这是一个在XML和JavaScript对象之间进行转换的库。转换不一定是无损的，但非常方便。</p>

        <p>安装：<code>npm install x2js</code></p>

        <p>引用：</p>

        <p>require("x2js")</p>

        <p v-highlight class="codeblock"><pre><code>
        var x2js = new X2JS();
        var document = x2js.xml2js(xml); 
        console.log(document.MyRootElement.ElementX[1].toString());
        var xml = x2js.js2xml(document);
        console.log(xml);
        </code></pre></p>
      </div>
      <h2>jsonFormater</h2>

      <div class="util">
        <p>作用：json格式化、高亮库jsonFormater</p>
        <p>下载地址：<a href="https://github.com/ymd-hurt67/Code">https://github.com/ymd-hurt67/Code</a></p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Assembly',
  data () {
    return {
        
    }
  },
  methods: {
        
  }
}
</script>

<style scoped>
#assembly{
    font-size: 14px;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}
a{
  color: #1BAAE4;
}
.codeblock{
    box-sizing: border-box;
    border: 1px dotted #ccc;
    border-radius: 5px;
}
.zujian,.util{
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>