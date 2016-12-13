<template>
   <article>
      <div class="title">
        <span class="first">
          <span v-if="topic.top" class="title_top">置顶</span>
          <span v-else="topic.good" class="title_top">精华</span>
          {{topic.title}}
        </span>
        <ul class="second">
          <li>发布于{{topic.create_at | timefilter}}</li>
          <li>作者{{topic.author.loginname}}</li>
          <li>{{topic.visit_count}}次浏览</li>
          <li>最后一次编辑是{{topic.last_reply_at | timefilter}}</li>
          <li>来自{{topic.tab}}</li>
       </ul>
      </div>
      <hr>
      <div v-html="topic.content"></div>
  </article>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import {timefilter} from '../utils/filter.js'
export default{
  data () {
    return {
      topic: ''
    }
  },
  methods: {
    ...mapActions({
      updatetopiclatest: 'getTopic'
    })
  },
  computed: {
    ...mapGetters(['topic'])
  },
  filters: {
    timefilter
  },
  created () {
    if (this.$route.params.id) {
      this.updatetopiclatest(this.$route.params.id)
    } else {
      this.updatetopiclatest(0)
    }
  }
}
</script>
<style>
article .title{
  overflow:hidden;
}
article .title .first{
  display:block;
  padding:10px 0px;
  font-size:20px;
  font-weight:700;
}
article .title .first .title_top{
  font-size:17px;
  color:#fff;
  background:#80bd01;
  padding:2px;
  border-radius:3px;
}
article .title .second{
  clear: both;
  padding:5px;
}
article .title .second li{
   display:inline;
   padding:5px;
   font-size:12px;
   color:#838383;
} 
</style>
