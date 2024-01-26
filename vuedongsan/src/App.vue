<template>
<div class="start">
  <ModalWindow @closeModal="모달창열렸니 = false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
</div>


<div class="menu">
  <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
</div>

<TheDiscount/>

<TheCard @openModal="모달창열렸니 = true; 누른거 = $event" :원룸들="원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>



<!--div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{a.title}}</h4>
    <p>{{a.price}}원</p>
  </div-->
   


</template>

<script>
/*데이터 바인딩 하는 이유
1. 그냥 html에 하드코딩하면 나중에 값 변경 어려움 
2. 쇼핑몰은 가격 변동 매우 심함 -> 가변적인 값들은 하드코딩보단 데이터 바인딩으로 하는 것이 나음
3.(중요) 뷰의 실시간 자동 렌더링 기능 이용 위해선 데이터 바인딩 무조건 해라
-> 웹 앱 만들고 싶으면, html이 샤라락 변하는 웹 만들고 싶으면 데이터 바인딩해라.
4. 자주 변경되지 않는 것 ,ex 쇼핑몰 이름 이런건 데이터 바인딩 필요없을 듯

즉 자주 변경될 값들은 밑에 저장 후 데이터 바인딩

html 속성도 데이터 바인딩 가능
: 속성 = "데이터 이름"
*/

import data from './assets/oneroom.js';
import ModalWindow from './ModalWindow.vue';
import TheDiscount from './TheDiscount.vue';
import TheCard from './TheCard.vue';




export default {
  name: 'App',
  data(){ //데이터 보관함, 변수같은 것 다 때려넣기
    return{
      누른거:0,
      원룸들:data,
      모달창열렸니: false,
      메뉴들:['Home','Shop','About'],
      

    }
  },

  methods : {
   

  },

  components: {
    TheDiscount,
    ModalWindow,
    TheCard,

  }
}
</script>

<style>

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
body{
  margin:0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%; height:100%;
  background:rgba(0,0,0,0.5);
  position: fixed; padding:20px;
  
}
.white-bg{
  width:100%; background: white;  
  border-radius: 8px;
  padding:20px;
}
.room-img{
  width:100%;
  margin-top:40px;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.menu{
  background: darkslateblue;
  padding:15px;
  border-radius: 5px;
}

.menu a{
  color:white;
  padding: 10px;
}
</style>
