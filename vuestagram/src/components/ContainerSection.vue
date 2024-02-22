<template>
  <div>
    <PostSection :postdata="postdata" />
    <PostSection :postdata="postdata" />
    <PostSection :postdata="postdata" />
    
  </div>
</template>

<script>
import PostSection from "./PostSection.vue";


export default {
  data()
  {
    return{
      
      
    }
  },
  components: {
    PostSection,
  },
  props:{
    postdata:Array,
  }
};
</script>

<style>
</style>