<template>
  <div id="home">
      <div class="nav">
          <h1 class="logo">myJSON</h1>
          <div class="myNav">
              <ul>
                    <li><router-link to="/json">在线解析</router-link></li>
                    <li><router-link to="/definition">JSON定义</router-link></li>
                    <li><router-link to="/document">JSON解析代码</router-link></li>
                    <li><router-link to="/assembly">JSON组件</router-link></li>
                </ul>
          </div>
          <hr style=" height:1px;border:none;border-top:1px dotted #eee;">
      </div>
      <router-view></router-view>
      <div class="footer">
          <p>©2018 Json.cn All right reserved. <span>京ICP备15025187号-1</span> 邮箱：yimeidan@100tal.com</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#home{
    font-size: 0;
}
.logo,.myNav,.nav li{
    display: inline-block;
}
.logo{
    width: 50%;
    box-sizing: border-box;
    padding-left: 2%;
    background:lightseagreen -webkit-linear-gradient(left,lightgreen,#febaf7 50%,#ff0 90%,lightgreen) no-repeat 0 0;
    background-size:20% 100%; 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    text-decoration: underline;
    font-size: 28px;
}
.logo {-webkit-animation: slideShine 2s linear infinite;animation: slideShine 4s linear infinite;}
@-webkit-keyframes slideShine {
    0% {background-position: 0 0;}
    100% {background-position: 100% 100%;}
 }
@keyframes slideShine {
    0% {background-position: 0 0; }
    100% {background-position: 100% 100%; }
}
.myNav{
    width: 50%; 
    position: relative;
}
.myNav ul{
    position: absolute;
    right: 10%;
    width: 60%;
}
.nav li{
    text-align: center;
    font-size: 15px;
    margin-right: 3%;
    font-weight: bold;
}
.footer{
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
}
.footer span{
    color: lightskyblue;
    font-size: 0.6em;
}
a{
    color: #4A5560;
}
</style>