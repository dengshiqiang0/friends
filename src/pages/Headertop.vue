<template>
  <div>
      <div class="bgctupian">
            <img src="../assets/logo.png" alt="">
      </div>
      <div class="topnav">
        <h1>
          <img src="../assets/logo.jpg" alt="">
        </h1>
        <ul>
            <li>首页</li>
            <li>产品</li>
            <li>企业新闻</li>
            <li>关于尼欧</li>
            <li>加入我们</li>
            <li>购物车</li>
            <li>登录</li>
        </ul>
      </div>
      <div class="tupian">
        <img src="../assets/first_page_pc.png" alt="">
      </div>
      <div class="jiashi">
        <div class="jiazhi-biaoti">
          <h1>安全·智能·舒适的驾驶体验</h1>
          <h4>让驾驶员和乘车人在行车中获得更高的安全性</h4>
        </div>
      </div>
      <div class="nioushenghuo">
        尼欧·创造美好车生活
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
      <div>
        我进行了一次修改
      </div>
  </div>
</template>

<script>
import Swiper  from 'swiper'
export default {
created(){
  this.$nextTick(()=>{
      new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
  })
}
}

</script>
<style scoped>
@import url("../assets/swiper.css");
.bgctupian{
  width:70%;
  height:500px;
  position: fixed;
  bottom: 50px;
  left: 150px;
  z-index: -5;
}
.bgctupian img{
  width: 100%;
  height:100%
}
li{
  list-style: none;
}
.topnav{
  height:80px;
  width:1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.topnav h1{
  width:150px;
  height:80px;
}
.topnav h1 img{
  display: block;
  height:50px;
  line-height: 50px;
}
.topnav ul{
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tupian{
  width:100%;
  height:650px;
}
.tupian img{
  width:100%;
  height: 100%;
}
.jiashi{
  width:100%;
  height:600px;
  background-color: rgb(255, 255, 255,0);
  position: relative;
}
.jiazhi-biaoti{
  width:550px;
  height: 150px;
 margin: 125px auto;
}
.nioushenghuo{
  height:500px;
  background-color: white;
}
.swiper-container {
    width: 600px;
    height: 300px;
}  
</style>