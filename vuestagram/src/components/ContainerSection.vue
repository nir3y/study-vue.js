<template>
  <div>
    <PostSection :postdata="item" v-for="(item, index) in postdata" :key="index" />


  </div>
</template>

<script>
import PostSection from "./PostSection.vue";


export default {
  data() {
    return {


    }
  },
  components: {
    PostSection,
  },
  props: {
    postdata: Array,
  }
};
</script>

<style></style>