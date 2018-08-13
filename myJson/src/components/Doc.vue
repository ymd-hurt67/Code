<template>
  <div id="doc">
      <div class="language">
        <h2 id="Javascript">Javascript</h2>

        <p>1.JSON.parse(jsonstr)</p>

        <p class="codeblock" v-highlight><pre><code>
        var str='{"leg":4,"eye":2,"height":100,"food":"meat"}';
        var obj=JSON.parse(str); //json 字符串转json对象
        console.log(obj);
        输出为一个对象 内容为
        eye:2
        food:"meat"
        height:100
        leg:4
        </code></pre></p>

        <p>2.eval('(' + jsonstr + ')'); </p>

        <p class="codeblock" v-highlight><pre><code>
        var str='{"leg":4,"eye":2,"height":100,"food":"meat"}';
        var obj=eval('(' + str + ')'); json 字符串转json对象
        console.log(obj);
        输出为一个和上面JSON.parse(str)输出一样的对象 内容为
        eye:2
        food:"meat"
        height:100
        leg:4
        </code></pre></p>

        <p>以上代码来自博客<a href="https://www.jianshu.com/p/374d15dc8f80">https://www.jianshu.com/p/374d15dc8f80</a></p>

        <h2 id="PHP">PHP</h2>

        <p class="codeblock" v-highlight><pre><code>
        $json= '[{"id":"1","name":"\u5f20\u96ea\u6885","age":"27","subject":"\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f"},{"id":"2","name":"\u5f20\u6c9b\u9716","age":"21","subject":"\u8f6f\u4ef6\u5de5\u7a0b"}]';
        $students= json_decode($json);//得到的是 object
        foreach($studentsas $obj){
            echo "姓名：".$obj-&gt;name."&amp;nbsp;&amp;nbsp;&amp;nbsp;年 龄：".$obj-&gt;age."&amp;nbsp;&amp;nbsp;&amp;nbsp;专 业：".$obj-&gt;subject."&lt;br /&gt;";
        }
        </code></pre></p>

        <p>以上代码来自博客<a href="https://www.cnblogs.com/zonglonglong/p/4291063.html">https://www.cnblogs.com/zonglonglong/p/4291063.html</a></p>

        <h2 id="Java">Java</h2>

        <p class="codeblock" v-highlight><pre><code>
        import com.alibaba.fastjson.JSON;
        import com.alibaba.fastjson.JSONObject;
        import java.util.List;
        public class Test {
            public static void main(String[] args) {
                String jsonStr = "[{'id':'11','parentId':'root','refObj':{'existType':'exist','deptType':'emp','treeNodeType':'dept'}}]";
                List&lt;JSONObject&gt; list = JSON.parseArray(jsonStr, JSONObject.class);
                for (JSONObject object : list) {
                    System.out.println(object.getJSONObject("refObj").getString("deptType"));
                }
            }
        }
        </code></pre></p>

        <p>以上代码来自博客<a href="https://zhidao.baidu.com/question/984555939466373339.html">https://zhidao.baidu.com/question/984555939466373339.html</a></p>

        <h2 id="C">C/C++</h2>

        <p class="codeblock" v-highlight><pre><code>
        Json::Reader Reader;
            Json::Value DevJson;
            Reader.parse(str,DevJson);
            int dev_id = DevJson["dev_id"].asInt();
            int index = DevJson["index"].asInt();
        </code></pre></p>

        <p>以上代码来自博客<a href="https://blog.csdn.net/Tiny815/article/details/80769403">https://blog.csdn.net/Tiny815/article/details/80769403</a></p>

        <p>如需更多语言，欢迎联系我们</p>
      </div>
<div class="quickNav">
  <strong>快速导航</strong>
  <ul>
    <li><a href="#Javascript">Javascript</a></li>
    <li><a href="#PHP">PHP</a></li>
    <li><a href="#Java">Java</a></li>
    <li><a href="#C">C</a></li>
  </ul>
</div>
  </div>
</template>

<script>
export default {
  name: 'Doc',
  data () {
    return {
        
    }
  },
  methods: {
        
  }
}
</script>

<style scoped>
#doc{
    font-size: 14px;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}
.codeblock{
    box-sizing: border-box;
    padding: 20px;
    background-color: #fcf8e3;
    border: 1px dotted #4A5560;
    border-radius: 5px;
}
.language{
  width: 70%;
  float: left;
}
.quickNav{
  margin-left: 80%;
  box-sizing: border-box;
  padding: 70px 5%;
  margin-top: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
a{
  color: #1BAAE4;
}
</style>