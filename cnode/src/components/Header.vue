<template>
  <header>
  <a href="/" class="vue_icon">
        <img :src="vue_img" alt="vue_icon" >
  </a>
    <ul class="header_bar">
        <li v-for="title in titles">
            <router-link :to="title.path">{{title.text}}</router-link>
        </li>
    </ul>
  </header>
</template>
<script>
export default{
  data () {
    return {
      titles: [
        {
          text: '首页',
          path: '/'
        },
        {
          text: '未读消息',
          path: '/'
        },
        {
          text: '新手入门',
          path: '/'
        },
        {
          text: 'API',
          path: '/'
        },
        {
          text: '关于',
          path: '/'
        },
        {
          text: '设置',
          path: '/'
        },
        {
          text: '退出',
          path: '/'
        }
      ],
      vue_img: 'static/cnodejs.svg'
    }
  }
}
</script>
<style>
header{
  width: 80%;
  margin: 0 auto;
  background-color: #444;
  overflow:hidden;
}
.vue_icon{
  width:120px;
  padding:3px 20px;
  height:28px;
  display:inline-block;
}
.vue_icon img{
  height:auto;
  vertical-align:middle;
  border:0;
}
header .header_bar{
  width:80%;
  display: inline-block;
  list-style: none;
  vertical-align:middle;
  overflow:hidden;
}
header .header_bar li{
  border:1px solid #444;
  display:inline-block;
  width:13%;
  text-align: center;
  padding:10px 0 
}

header .header_bar li:hover{
  background-color: #6F8391;
}
header .header_bar li a{
  color: #ccc;
  text-decoration: none;
  font-size: 15px;
}
header ul li a:hover{
  color:#fff;
}
</style>
