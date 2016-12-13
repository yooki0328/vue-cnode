<template>
  <article>
    <div class="bar">
      <ul>
        <li v-for="(navbar,index) in navbars">
          <a :class="[{bar_active:navbar.current}]" :href="navbar.path" @click.prevent="changeBar(index)">{{navbar.text}}</a>
        </li>
      </ul>
    </div>
    <div class="content">
        <div v-for="data in datas" class="topic" >
          <img :src="data.author.avatar_url" alt="icon">
             <span class="reply_visit">
             <span class="reply">{{data.reply_count}}</span>/<span class="visit">{{data.visit_count}}</span>
             </span>
             <span v-if="data.top" class="top">置顶</span>
             <span v-else-if="data.good" class="top">精华</span>
             <span v-else>
                  <span class="tab">{{getTab(data)}}</span>
             </span>
          <router-link :to="{
            name: 'content',
            params: {
              id: data.id
            }
          }" tag="a">{{data.title}}</router-link>
        </div>
    </div>
    <div class="page_bar">
      <ul>
        <li v-if="showFirst"><a @click="prevPage">Previous</a></li>
        <li v-for="index in indexs" :class="{'active':curPage == index}">
          <a @click="skipPage(index)">{{index}}</a>
        </li>
        <li v-if="showLast"><a @click="nextPage">Next</a></li>
      </ul>
    </div>
  </article>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {
      tab: '',
      currentBar: '',
      curPage: '',
      indexs: '',
      showFirst: '',
      showLast: '',
      options: {
        method: 'GET',
        page: 8,
        tab: '',
        limit: 20,
        mdrender: false
      },
      navbars: [
        {
          text: '全部',
          path: '',
          current: true
        },
        {
          text: '精华',
          path: 'good',
          current: false
        },
        {
          text: '分享',
          path: 'share',
          current: false
        },
        {
          text: '问答',
          path: 'ask',
          current: false
        },
        {
          text: '招聘',
          path: 'job',
          current: false
        }
      ]
    }
  },
  methods: {
    changeBar (index) {
      for (let bar of this.navbars) {
        bar.current = false
      }
      this.navbars[index].current = true
      this.options.tab = this.navbars[index].path
      this.updatedataslatest(this.options)
    },
    getTab (data) {
      switch (data.tab) {
        case 'ask':
          return '问答'
        case 'job':
          return '招聘'
        case 'share':
          return '分享'
      }
    },
    skipPage (index) {
      this.cur = index
    },
    prevPage () {
      this.cur--
    },
    nextPage () {
      this.cur++
    },
    ...mapActions({
      updatedataslatest: 'getDatas'
    })
  },
  computed: {
    ...mapGetters(['datas'])
  },
  created () {
    this.updatedataslatest(this.options)
  }
}
</script>
<style>
article{
  width: 80%;
  margin:0 auto;
  background-color: #fff;
  border-radius:5px;
}
.bar{
  width:100%;
  overflow:hidden;
  background-color:#f1f1f1;
}
.bar ul{
  list-style:none;
}
.bar ul li{
  float: left;
  margin:15px;
}
ul li a{
  text-decoration: none;
  color: #80bd01;
  font-size: 16px;
}
.bar_active{
  color:#fff;
  background-color:green;
  padding:5px;
  border-radius:4px;
}
.content .topic{
  display:block;
  overflow:hidden;
  border-bottom:1px solid #f1f1f1;
  padding:10px;
}
.content div{
  display:none;
}
.topic img{
  width:40px;
  display: inline;
  vertical-align:middle;
  margin-right:10px;
}
.top{
  display:inline-block;
  background-color:#80bd01;
  padding:2px 4px;
  border-radius:3px;
  color: #fff;
  font-size:12px;
}
.reply_visit{
  width:70px;
  text-align:center;
  display:inline-block;
}
.reply{
  color:#9e78c0;
  font-size:16px;
}
.visit{
  color:#b4b4b4;
}
.topic a{
  text-decoration:none;
  color:black;
}
.topic a:hover{
  text-decoration:underline;

}
.topic:hover{
  background-color:#f1f1f1;
}
.tab{
  background-color:#e5e5e5;
  color:#999;
  padding:2px 4px;
  -webkit-border-radius:3px;
  font-size:12px;
}
</style>
