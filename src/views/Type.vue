<template>
    <div class="type">
        <top-title>选酒</top-title>
        <div class="type-wrap">
            <van-search v-model="value" placeholder="人头马大牌日  领券满399减50" shape="round"/>
            <div class="type-grid">
                <div class="type-item" @click="toCate('白酒')"><i style="background-position: 4px 0;"></i>白酒</div>
                <div class="type-item" @click="toCate('葡萄酒')"><i style="background-position: -80px 0px;"></i>葡萄酒</div>
                <div class="type-item" @click="toCate('洋酒')"><i style="background-position: -163px 1px;"></i>洋酒</div>
                <div class="type-item" @click="toCate('整箱购')"><i style="background-position: 0 -70px;"></i>整箱购</div>
                <div class="type-item" @click="toCate('老酒')"><i style="background-position: -84px -70px;"></i>老酒</div>
                <div class="type-item" @click="toCate('清仓特卖')"><i style="background-position: -165px -70px;"></i>清仓特卖</div>
                <div class="type-item" @click="toCate('海外直采')"><i style="background-position: 0 -141px;"></i>海外直采</div>
                <div class="type-item" @click="toCate('精美大坛')"><i style="background-position: -84px -141px;"></i>精美大坛</div>
                <div class="type-item" @click="toCate('红酒整箱')"><i style="background-position: -165px -141px;"></i>红酒整箱</div>
                <div class="type-item" @click="toCate('值得买')"><i style="background-position: 2px -217px;"></i>值得买</div>
                <div class="type-item" @click="toCate('销量排行')"><i style="background-position: -84px -218px;"></i>销量排行</div>
                <div class="type-item" @click="toCate('礼尚往来')"><i style="background-position: -165px -217px;"></i>礼尚往来</div>
            </div>
        </div>
    </div>
</template>

<script>
import topTitle from '../components/TopTitle.vue';
export default {
    data(){
        return {
            value:'',
        }
    },
    components:{
        topTitle
    },
    methods:{
        toCate(cate){
        this.$router.push({
            path: '/cate',
            query: {cate}
        });
    },
    }
}
</script>

<style lang='scss' scoped>
 .type{
     width: 100%; 
 }
 .type-wrap{
     width: 100%; position: absolute; top: 40px;
     .van-search{
         border-bottom: 1px solid #f6f6f6; background: #fff;
     }
 }
 .type-grid{
     width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between;
     .type-item{
         width: 33%; height: 80px; border-left: 1px solid #f6f6f6; border-bottom: 1px solid #f6f6f6;
         text-align: center; line-height: 20px;  font-size: 14px;
         i{
             background: url('../../public/img/type.png') no-repeat;
             display: block; width: 36px; height: 36px; margin: 8px auto;
         }
     }
 }
</style>
