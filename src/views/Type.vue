<template>
    <div class="type">
        <top-title>选酒</top-title>
        <div class="type-wrap">
            <van-search v-model="value" placeholder="人头马大牌日  领券满399减50" shape="round"/>
            <div class="type-grid">
                <div class="type-item">白酒</div>
                <div class="type-item">葡萄酒</div>
                <div class="type-item">洋酒</div>
                <div class="type-item">整箱购</div>
                <div class="type-item">老酒</div>
                <div class="type-item">清仓特卖</div>
                <div class="type-item">海外直采</div>
                <div class="type-item">精美大坛</div>
                <div class="type-item">红酒整箱</div>
                <div class="type-item">值得买</div>
                <div class="type-item">销量排行</div>
                <div class="type-item">礼尚往来</div>
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
         text-align: center; line-height: 80px;
     }
 }
</style>
