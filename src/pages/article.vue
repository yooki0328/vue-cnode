<template>
    <div class="container">
            <cHeader></cHeader>
            <cContent></cContent>
    </div>
</template>
<script>
import cHeader from 'src/components/Header.vue'
import cContent from 'src/components/Content.vue'
export default{
  name: 'content_page',
  components: {
    cHeader,
    cContent
  }
}
</script>
<style>
*{
  margin:0px;
  padding:0px;
}
  
</style>

