<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ postdata[0].name }}</span>
    </div>
    <div class="post-body"></div>
    <div class="post-content">
      <p>{{ postdata[0].likes }} Likes</p>
      <p><strong>{{ postdata[0].name }}</strong> {{ postdata[0].content }}</p>
      <p class="date">{{ postdata[0].date }}</p>
    </div>
</div> 
</template>

<script>

export default {
    props:{
        postdata : Array,
    }

}
</script>

<style>
.post{
    width: 100%;
}
.profile{
    background-image:url("https://picsum.photos/100?random=0") ;
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}
.profile-name  {
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
    display: block;
}
.post-header{
    height: 30px;
    padding: 10px;
}
.post-body{
    background-image:url("https://picsum.photos/600?random=0") ;
    height: 450px;
    background-position: center;
    background-size: cover;
}
.post-content{
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}
.date{
    font-size: 11px;
    color: gray;
    margin-top: -8px;
}
</style>