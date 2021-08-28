<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img src="/img/banner1.jpg" alt="#"></van-swipe-item>
    <van-swipe-item><img src="/img/banner2.jpg" alt="#"></van-swipe-item>
    <van-swipe-item><img src="/img/banner3.jpg" alt="#"></van-swipe-item>
    <van-swipe-item><img src="/img/banner4.jpg" alt="#"></van-swipe-item>
    <van-swipe-item><img src="/img/banner5.jpg" alt="#"></van-swipe-item>
    <van-swipe-item><img src="/img/banner6.jpg" alt="#"></van-swipe-item>
    <van-swipe-item><img src="/img/banner7.jpg" alt="#"></van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
    data(){
        return {

        }
    },
}
</script>

<style scoped>
.my-swipe  {
  width: 100%; overflow: hidden; box-sizing: border-box;
    color: #fff;
    font-size: 20px;
    background-color: #39a9ed;
  }

.van-swipe-item{
  float: left;
}
.van-swipe__track{
  width: 100%;
}
.van-swipe-item img{
  display: block; width: 100%; 
}

</style>