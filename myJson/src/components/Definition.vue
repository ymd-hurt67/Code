<template>
  <div id="definition">
      <h1>Json简介</h1>

<h2>JSON概览</h2>

<p>JSON（JavaScript Object Notation）是一种基于文本的数据交换格式。无论你的应用是用哪种开发语言编写的（Java/EE，Ruby，PHP，C#/.Net等等），你都可以使用JSON来通过网络进行数据交互和处理。几乎所有的编程语言都有很好的库或第三方工具来提供基于JSON的API支持，因此你可以非常方便地使用任何自己喜欢的编程语言来处理JSON数据。而另一方面随着REST、像MongoDB这样的NoSQL技术或标准的广泛使用，JSON也正成为一种被推荐的数据交互格式。</p>

<p>JSON是在2001年，由Douglas Crockford创建的，并且被IETF(Internet Engineering Task Force)定义为RFC 4627标准，详请参考：http://tools.ietf.org/html/rfc4627。JSON的媒体类型被定义为 application/json，而文件的后缀为.json。</p>

<h2>JSON是什么</h2>

<p>JSON是一种简单数据格式，它有三种数据结构：</p>

<ul>
<li>键值对 —— Name/Value (Key/Value)</li>
<li>对象 —— Object</li>
<li>数组 —— Arrays
一个有效的JSON文档需要被包含在一对花括号内
{ JSON-Data }</li>
</ul>

<blockquote>
  <p>请注意，有些开发社区或线上文档直接将上面的JSON文档称为JSON字符串，这两者的意思是一样的。</p>
</blockquote>

<h2>为什么使用JSON</h2>

<p>JSON被认为是XML的很好替代者。因为JSON的可读性非常好，而且它没有像XML那样包含很多冗余的元素标签，这使得应用在使用JSON进行网络传输以及进行解析处理的速度更快，效率更高。</p>

<h3>键值对 —— Name/Value</h3>

<p><strong>键值对</strong>是JSON中<strong>最基本</strong>的数据结构：</p>

<p><code>{ “firstName”: “John”}</code></p>

<p>在上面的例子中属性"firstName"是用一对双引号括起来的一个字符串。而它的值"John"在这个例子中也是一个字符串，<strong>当然它还可以是其他类型</strong>，具体可参考后面数据类型的章节。在市面上很多的产品或技术声称他们使用的是JSON数据格式，但他们在定义属性时，并没有用双引号将属性名称括起来，其实这是违反JSON定义标准的。</p>

<h3>对象 —— Object</h3>

<p>一个JSON对象是<strong>包含了一组未排序键值对的集合</strong>。下面例子中的address就是一个JSON对象：</p>
<p v-highlight class="codeblock"><pre><code>
{
    “address” : {
        “line1” : “555 Main Street”,
        “city” : “Denver”,
        “stateOrProvince” : “CO”,
        “zipOrPostalCode” : “80202”,
        “country” : “USA”
    }
}</code></pre></p>

<p>上面的例子中address对象<strong>包含了5个属性</strong>，它们之间<strong>用,进行分割</strong>。</p>

<h3>数组 —— Array</h3>

<p><strong>JSON中[]来包含数组元素</strong>，参考下面的例子：</p>

<p v-highlight class="codeblock"><pre><code>
{
    “people” : [
        { “firstName”: “John”, “lastName”: “Smith”, “age”: 35 },
        { “firstName”: “Jane”, “lastName”: “Smith”, “age”: 32 }
    ]
}
</code></pre></p>

<h3>数据类型</h3>

<p>JSON中的数值（<strong>键值对中的值</strong>）可以是以下任意一种：</p>

<p>Object</p>

<p>Array</p>

<p>String</p>

<p>Number</p>

<p>Boolean</p>

<p>null</p>

<h4>Number</h4>

<p>数值类型数据可以是整型也可以是双精度的浮点型数据。下面是一些示例：
“age”: 29“cost”: 299.99“temperature”: -10.5“speed_of_light”: 1.23e11“speed_of_light”: 1.23e+11“speed_of_light”: 1.23E11“speed_of_light”: 1.23E+11</p>

<p>上面的属性（如age等）都是用双引号括起来的字符串，而数值是不需要用双引号括起来的。你可以在数值前加上-号来表示负数，也可以采用科学计数法。但不能在数值前加0或使用16进制来表示一个数值。</p>

<h4>Boolean</h4>

<p>JSON中的Boolean值可以用true或false来表示。不用加{}
{ “emailValidated” : true}
<strong>Boolean值也不需要使用双引号来修饰。</strong></p>

<h4>null</h4>

<p>严格来说null并不是一个数据类型，但它非常重要，它表示一个属性或元素没有值。因此请注意** ' ' 表示的是空字符串，而null表示的才是空值。**
{ “age” : null}</p>
  </div>
</template>

<script>
export default {
  name: 'Definition',
  data () {
    return {
        
    }
  },
  methods: {
        
  }
}
</script>

<style scoped>
#definition{
    font-size: 14px;
    width: 80%;
    margin: 0 auto;
}
.codeblock{
    box-sizing: border-box;
    padding: 20px;
    background-color: #fcf8e3;
    border: 1px dotted #4A5560;
    border-radius: 5px;
}
</style>