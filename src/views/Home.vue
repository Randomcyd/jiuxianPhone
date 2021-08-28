<template>
  <div id="home">
    <download-app></download-app>
    <footer-bar></footer-bar>
    <swiper></swiper>
    <div class="nav">
      <div class="class-box">
        <img src="../../public/img/item1.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item2.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item3.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item4.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item5.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item6.gif" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item7.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item8.gif" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item9.jpg" alt="" />
      </div>
      <div class="class-box">
        <img src="../../public/img/item10.jpg" alt="" />
      </div>
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic01.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic02.jpg" alt="" />
    </div>
    <div id="toutiao">
      <img src="/img/toutiao.jpg" alt="#" />
      <!-- <ul>
              <li><a href="/html/banner/banner1.html">爆品腰斩日 限时24小时</a></li>
              <li><a href="/html/banner/banner1.html">1499飞天茅台限量抢</a></li>
              <li><a href="/html/banner/banner1.html">爆品腰斩日 限时24小时</a></li>
              <li><a href="/html/banner/banner1.html">1499飞天茅台限量抢</a></li>
          </ul> -->
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        vertical
      >
        <van-swipe-item><a href="">爆品腰斩日 限时24小时</a></van-swipe-item>
        <van-swipe-item><a href="">1499飞天茅台限量抢</a></van-swipe-item>
        <van-swipe-item><a href="">爆品腰斩日 限时24小时</a></van-swipe-item>
        <van-swipe-item><a href="">1499飞天茅台限量抢</a></van-swipe-item>
      </van-swipe>
    </div>
    <div id="time">
      <h3>掌上秒拍</h3>
      <p>距结束</p>
      <span>
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </span>
      <p class="more">更多商品等你来抢!<van-icon name="chat-o" /></p>
    </div>
    <div class="crossItem">
      <!-- <div
        class="crossItem-box"
        v-for="item in crossItemList"
        :key="item.actId"
      >
        <img :src="item.proImg" alt="" />
        <span class="item-name">{{ item.proName }}</span>
        <span class="item-price">{{ "￥" + item.proPrice }}</span>
        <del class="y-item-price">{{ "￥" + item.jxPrice }}</del>
      </div> -->
      <van-swipe
        class="my-swipe"
        indicator-color="white"
        :width="110"
        :loop="false"
      >
        <van-swipe-item v-for="item in crossItemList" :key="item.proId">
          <img :src="item.proImg" alt="" />
          <span class="item-name">{{ item.proName }}</span>
          <span class="item-price">{{ "￥" + item.proPrice }}</span>
          <del class="y-item-price">{{ "￥" + item.jxPrice }}</del>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic03.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic04.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic05.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic06.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic07.jpg" alt="" />
    </div>
    <div class="item-wrap">
      <div class="left-side">
        <img
          src="https://img10.jiuxian.com/bill/2021/0107/884fff33af8c49d5855c7e5bec55c0f0.png"
          alt="#"
        />
      </div>
      <div class="right-side">
        <img
          src="https://img08.jiuxian.com/bill/2021/0518/0955e936a4304bfabade1405bca0d90c.jpg"
          alt="#"
        />
        <img
          src="https://img10.jiuxian.com/bill/2021/0308/04c26417be7549bd934b343ff996639a.jpg"
          alt="#"
        />
      </div>
    </div>
    <div class="crossPic">
      <van-swipe
        class="my-swipe"
        indicator-color="white"
        :width="150"
        :loop="false"
      >
        <van-swipe-item
          ><img
            src="https://img08.jiuxian.com/bill/2021/0528/ac46d5059bb14c03be3b38046f2ab158.jpg"
            alt="#"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://img08.jiuxian.com/bill/2021/0225/807b37aee87e4b06a699d3d50f1e3487.jpg"
            alt="#"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://img09.jiuxian.com/bill/2021/0616/7834d9db5b084e2c9d1daa3e2d8270b8.jpg"
            alt="#"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://img09.jiuxian.com/bill/2021/0604/21ac9d026ec24158bf143c733488ba62.jpg"
            alt="#"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://img08.jiuxian.com/bill/2020/1012/fe91a8dac2b24769a86937784e174498.jpg"
            alt="#"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://img10.jiuxian.com/bill/2021/0616/616f9e63f3bf4e2aba6a420d18fd1a04.jpg"
            alt="#"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic08.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic09.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic10.jpg" alt="" />
    </div>
    <div class="banner-box">
      <img src="../../public/img/pic11.jpg" alt="" />
    </div>
    <div id="choose">
      <img src="/img/title1.png" alt="#" class="titlePic" />
      <div class="choose-top">
        <a href=""
          ><img
            src="https://img10.jiuxian.com/bill/2021/0406/a8118b0ff9ab4ad5959d68692b588cf3.jpg"
            alt="#"
        /></a>
        <a href=""
          ><img
            src="https://img08.jiuxian.com/bill/2021/0406/d281b67e1854429c80d1ae1ca9037085.jpg"
            alt="#"
        /></a>
      </div>
      <div class="choose-bottom">
        <a href=""
          ><img
            src="https://img06.jiuxian.com/bill/2021/0406/08a84dd12ed3434a8c7830037b37b550.jpg"
            alt="#"
        /></a>
        <a href=""
          ><img
            src="https://img08.jiuxian.com/bill/2021/0406/26361c89a2a44d298e7037ec4f1a25c7.jpg"
            alt="#"
        /></a>
        <a href=""
          ><img
            src="https://img06.jiuxian.com/bill/2021/0406/99302bf2316f43e2b56d8fd1be9e2891.jpg"
            alt="#"
        /></a>
      </div>
    </div>
    <div class="public">
      <img src="/img/title2.png" alt="#" class="titlePic">
      <div class="public-box">
                      <div class="left-box">
                          <a href=""><img src="https://img06.jiuxian.com/bill/2021/0204/9af3f57fca834d0984844523f54cb715.jpg" alt="#"></a>
                      </div>
                      <div class="right-box">
                          <a href=""><img src="https://img06.jiuxian.com/bill/2020/0405/1d3b3a1f56bf463286730f0751f56084.jpg" alt="#"></a>
                          <div class="next-box">
                              <a href=""><img src="https://img06.jiuxian.com/bill/2021/0426/48e2df72461543fdb260edd397a8ad20.jpg" alt="#"></a>
                              <a href=""><img src="https://img07.jiuxian.com/bill/2021/0204/2926c165fa6149b1a32574a605ef8c85.jpg" alt="#"></a>
                          </div>
                      </div>
       </div>
      <div class="brand">
                    <van-swipe class="my-swipe" :width="60" :loop="false" indicator-color="white">
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                    </van-swipe>
      </div>
    </div>
    <div class="public">
      <img src="/img/title3.png" alt="#" class="titlePic">
      <div class="public-box">
                      <div class="left-box">
                          <a href=""><img src="https://img10.jiuxian.com/bill/2021/0615/ba36a94094e0474bb5d88746b8c9de4c.jpg" alt="#"></a>
                      </div>
                      <div class="right-box">
                          <a href=""><img src="https://img08.jiuxian.com/bill/2021/0105/489b70d4093a4b8cb5577e7f2a0c5aba.jpg" alt="#"></a>
                          <div class="next-box">
                              <a href=""><img src="https://img06.jiuxian.com/bill/2021/0426/48e2df72461543fdb260edd397a8ad20.jpg" alt="#"></a>
                              <a href=""><img src="https://img07.jiuxian.com/bill/2021/0204/2926c165fa6149b1a32574a605ef8c85.jpg" alt="#"></a>
                          </div>
                      </div>
       </div>
      <div class="brand">
                    <van-swipe class="my-swipe" :width="60" :loop="false" indicator-color="white">
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                    </van-swipe>
      </div>
    </div>
    <div class="public">
      <img src="/img/title4.png" alt="#" class="titlePic">
      <div class="public-box">
                      <div class="left-box">
                          <a href=""><img src="https://img09.jiuxian.com/bill/2021/0611/fdfc3b86a3ac47ddbfd4b7ff2f16219f.jpg" alt="#"></a>
                      </div>
                      <div class="right-box">
                          <a href=""><img src="https://img10.jiuxian.com/bill/2019/0923/73829a2f07d84146b33f4c7b6ae4c8ff.jpg" alt="#"></a>
                          <div class="next-box">
                              <a href=""><img src="https://img06.jiuxian.com/bill/2021/0126/50d9200f897d47e19235054bf74ee23a.jpg" alt="#"></a>
                              <a href=""><img src="https://img10.jiuxian.com/bill/2020/0324/431e72176dcc4d80af3a94058e359f1f.jpg" alt="#"></a>
                          </div>
                      </div>
       </div>
      <div class="brand">
                    <van-swipe class="my-swipe" :width="60" :loop="false" indicator-color="white">
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                    </van-swipe>
      </div>
    </div>
    <div class="public">
      <img src="/img/title5.png" alt="#" class="titlePic">
      <div class="public-box">
                      <div class="left-box">
                          <a href=""><img src="https://img07.jiuxian.com/bill/2020/0604/f84eb3b48df348e5a27fb35b3a99412c.jpg" alt="#"></a>
                      </div>
                      <div class="right-box">
                          <a href=""><img src="https://img09.jiuxian.com/bill/2020/0604/acfdc7f61d50405daba4e2bd895cb4c8.jpg" alt="#"></a>
                          <div class="next-box">
                              <a href=""><img src="https://img08.jiuxian.com/bill/2020/0404/1af18dcd955a442fa22dcad560bf0058.jpg" alt="#"></a>
                              <a href=""><img src="https://img07.jiuxian.com/bill/2020/0404/937e0fd39bd643dbab318678cd93fd3a.jpg" alt="#"></a>
                          </div>
                      </div>
       </div>
      <div class="brand">
                    <van-swipe class="my-swipe" :width="60" :loop="false" indicator-color="white">
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                      <van-swipe-item><img src="https://img06.jiuxian.com/bill/2020/0720/8678c6eef4a5440ca3f95646cbea45b3.jpg" alt="#"></van-swipe-item>
                    </van-swipe>
      </div>
    </div>
    <div id="topic">
                <img src="/img/title6.png" alt="#" class="titlePic">
                <div class="nav-bottom">
                    <a href=""><img src="https://img07.jiuxian.com/bill/2020/0519/b9ca232262f3496080ad9a0b9c0eaaeb.jpg" alt="#"></a>
                    <a href=""><img src="https://img07.jiuxian.com/bill/2020/0519/b9ca232262f3496080ad9a0b9c0eaaeb.jpg" alt="#"></a>
                    <a href=""><img src="https://img08.jiuxian.com/bill/2021/0204/f70a874b01264305b852b61a8d15613a.jpg" alt="#"></a>
                    <a href=""><img src="https://img06.jiuxian.com/bill/2020/0404/0ff9cb5e3dad483f900a828d5b15526c.jpg" alt="#"></a>
                    <a href=""><img src="https://img08.jiuxian.com/bill/2020/0403/836c63a894e34da5a14370d17ee50d26.jpg" alt="#"></a>
                    <a href=""><img src="https://img06.jiuxian.com/bill/2021/0205/3895a3379da4486abb46a862180bdbad.jpg" alt="#"></a>
                    <a href=""><img src="https://img08.jiuxian.com/bill/2020/0403/43751ab4f1f2425aa69c10c8acf4f9de.jpg" alt="#"></a>
                    <a href=""><img src="https://img10.jiuxian.com/bill/2020/0519/0738d654c47d4b12aceee98bd3eb2869.jpg" alt="#"></a>
                </div>
    </div>
    <div class="item-wrap">
      <div class="item-box" v-for="item in itemList" :key="item.commonProductInfo.pid">
        <div class="tag-group">
          <span v-for="(type,index) in item.promo" :key="index" :style="{background:type.backColor}">{{type.name}}</span>
        </div>
        <img :src="item.commonProductInfo.imgPath" alt="">
        <p class="item-name">{{item.commonProductInfo.pname}}</p>
        <span class="item-price">{{"￥"+item.commonProductInfo.actPrice}}</span>
        <del class="del-item-price">{{"￥"+item.commonProductInfo.jxPrice}}</del>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import { CountDown, Icon } from "vant";
Vue.use(Icon);
Vue.use(CountDown);
import "vant/lib/icon/local.css";
import downloadApp from "../components/DownloadApp.vue";
import footerBar from "../components/FooterBar.vue";
import swiper from "../components/Swiper.vue";
export default {
  data() {
    return {
      time: null,
      crossItemList: [],
      itemList:[],
    };
  },
  name: "Home",
  components: {
    downloadApp,
    footerBar,
    swiper,
  },
  methods: {
    getTimeless() {
      let time = new Date("2021/9/1");
      return time - new Date();
    },
    getCrossItem() {
      this.axios
        .get("https://m.jiuxian.com/m_v1/promote/qgajax.do", {
          params: {
            t: 1630141351880,
            pagenum: 1,
            tabnum: 1,
          },
        })
        .then((res) => {
          this.crossItemList = res.data.killProList;
        });
    },
    getItemList(){
      this.axios
        .get("https://m.jiuxian.com/m_v1/statics/getzx.htm", {
          params: {
            topicId: 1165,
            pageNum: 1,
          },
        })
        .then((res) => {
          this.itemList = res.data.promoList;
          console.log(this.itemList);
        });
    },
    init() {
      this.getCrossItem();
      this.getItemList();
      let timeless = this.getTimeless();
      this.time = timeless;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .class-box {
    width: 20%;
    img {
      width: 100%;
      display: block;
    }
  }
}
.banner-box {
  width: 100%;
  background: #fff;
  img {
    display: block;
    width: 100%;
  }
}
#toutiao {
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  padding: 8px 10px;
  background: #fff;
  display: flex;
  img {
    display: block;
    height: 100%;
  }
  .my-swipe {
    height: 100%;
    overflow: hidden;
    border-left: 2px solid #ddd;
    margin-left: 10px;
    a {
      padding-left: 10px;
      font-size: 12px;
      color: #333;
      line-height: 20px;
      height: 20px;
      display: block;
    }
  }
}
#time {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 32px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid #eee;
  h3 {
    font-size: 14px;
    width: 80px;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
  span {
    display: block;
    .van-count-down {
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    i {
      display: inline-block;
    }
  }
  p {
    font-size: 12px;
    color: #666;
  }
  .more {
    margin-left: 20px;
    .van-icon-play-circle-o {
      display: inline-block;
    }
  }
}
.colon {
  display: inline-block;
  height: 16px;
  line-height: 16px;
  margin: 0 2px;
  color: #858585;
}
.block {
  background: #858585;
  width: 16px;
  height: 16px;
  color: #fff;
  border-radius: 2px;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
}
.crossItem {
  width: 100%;
  height: 170px;

  .my-swipe {
    width: 100%;
    height: 170px;
    text-align: center;
    overflow: hidden;
  }
  .van-swipe-item {
    float: left;
    height: 170px;
    cursor: pointer;
    padding: 0 6px;
    box-sizing: border-box;
    img {
      display: block;
      width: 96px;
      height: 96px;
    }
    .item-name {
      width: 100%;
      height: 32px;
      font-size: 12px;
      color: #252525;
      display: block;
      overflow: hidden;
    }
    .item-price {
      color: #fc5a5a;
      margin-top: 5px;
      width: 100%;
      display: block;
    }
    .y-item-price {
      font-size: 12px;
      color: #999;
      width: 100%;
      display: block;
    }
  }
}
.item-wrap {
  width: 100%;
  display: flex;
  .left-side {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
  }
  .right-side {
    width: 50%;
    img {
      display: block;
      width: 100%;
      margin: 4px 0;
    }
  }
}
.crossPic {
  width: 100%;
  .my-swipe {
    width: 100%;
    color: #fff;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
  }
  .van-swipe-item {
    float: left;
    img {
      display: block;
      width: 100%;
    }
  }
}
.titlePic {
  width: 100%;
  display: block;
}
#choose {
  width: 100%;
  .choose-top {
    width: 100%;
    display: flex;
    a {
      width: 50%;
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .choose-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    a {
      width: 33%;
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
.public{
  width: 100%;
  .public-box{
    width: 100%; display: flex;
    .left-box{
      width: 39%;
      a{
        width: 100%; display: block;
        img{
          display: block; width: 100%;
        }
      }
    }
    .right-box{
      width: 61%;
      a{
        width: 100%; display: block;
        img{
          display: block; width: 100%;
        }
      }
      .next-box{
        display: flex;
        a{
          display: block; width: 50%;
        }
      }
    }
  }
  .brand{
    width: 100%;
    .my-swipe {
    width: 100%;
    color: #fff;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
  }
  .van-swipe-item {
    float: left;
    img {
      display: block;
      width: 100%;
    }
  }
  }
}
.nav-bottom{
  width: 100%; display: flex; flex-wrap: wrap;
  a{
    display: block; width: 50%;
    img{
      display: block; width: 100%;
    }
  }
}
.item-wrap{
  width: 100%; display: flex; justify-content: space-around; flex-wrap: wrap;
  .item-box{
    width: 49.5%; box-sizing: border-box; padding: 20px 10px 5px; border: 4px solid #eee; margin-top: 3px;
    position: relative;
    img{
      display: block; width: 100%;
    }
    .item-name{
      width: 100%; height: 32px; line-height: 16px;
      font-size: 12px; overflow: hidden;
    }
    .item-price{
      font-size: 14px;color: #fc5a5a;font-weight: normal;
    }
    .del-item-price{
      font-size: 12px;color: #999;font-weight: normal; margin-left: 5px;
    }
  }
}
.tag-group{
  position: absolute; top: 4px; left: 4px;
  span{
    display: block;
    text-align: center;
    height: 16px;
    line-height: 16px;
    border-radius: 3px;
    padding: 0 3px;
    font-size: 12px;
    color: #fff;
    font-style: normal;
    margin-right: 5px;
    float: left;
    margin-bottom: 2px;
  }
}
.blank {
  width: 100%;
  height: 44px;
}
</style>
