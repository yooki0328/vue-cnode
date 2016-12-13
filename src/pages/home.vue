<template>
    <div class="container">
        <div class="header">
            <cHeader></cHeader>
        </div>
        <div class="article">
            <cArticle></cArticle>
        </div>
        <div class="aside">
            <cAside></cAside>
        </div>
    </div>
</template>
<script>
import cHeader from 'src/components/Header.vue'
import cArticle from 'src/components/Article.vue'
import cAside from 'src/components/Aside.vue'

export default{
  name: 'home_page',
  components: {
    cHeader,
    cAside,
    cArticle
  }
}
</script>
<style>
*{
  margin:0px;
  padding:0px;
}
</style>
