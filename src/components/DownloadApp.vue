<template>
    <div id="download" v-if="showIndex">
            <i class="delete" @click="close()" ></i>
            <i class="logo"></i>
            <h5><p>打开酒仙网APP</p><p>新人领198元礼包</p></h5>
            <a href="" class="open">立即打开</a>
        </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {
    data(){
        return {
            showIndex:true 
        }
    },
    methods:{
        close(){
            this.showIndex=false
        }
    }
}
</script>

<style lang="scss" scoped>
    #download{
        width: 100%; height: 43px;background: #2e2e2e; color: #fff;
        display: flex; align-items: center;
    }
    .logo{
        width: 30px; height: 30px; display: block;
        background: url("../../public/img/logo.png") no-repeat 0 -15px;
        background-size: 32px;
    }
    .delete{
        width: 16px; height: 16px; display: block;
        background: url("../../public/img/logo.png") no-repeat 0 1px;
        background-size: 32px; margin: 0 10px;
    }
    h5{
        font-weight: normal; font-size: 12px; flex: 1; text-align: center;
    }
    .open{
        width: 116px; height: 43px; background: #e62929;
        line-height: 43px; text-align: center; color: #fff;
        font-size: 14px;
    }
</style>