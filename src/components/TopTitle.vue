<template>
    <div class="topTitle">
        <div class="title">
            <a class="back" @click="back()">后退</a>
            <h3><slot></slot></h3>
            <a class="menu" @click="showMenuAction()">菜单</a>
        </div>
        <div class="pull-down-menu" v-show="menuSwitch">
            <div class="down-menu-box" @click="toHome()">首页</div>
            <div class="down-menu-box" @click="toSearch()">搜索</div>
            <div class="down-menu-box" @click="toCart()">购物车</div>
            <div class="down-menu-box" @click="toLogin()">我的酒仙</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            menuSwitch:false,
        }
    },
    methods:{
        showMenuAction(){
            this.menuSwitch = !this.menuSwitch;
        },
        back(){
            this.$router.go(-1);
        },
        toHome(){
            this.$router.push('/');
        },
        toSearch(){
            this.$router.push('/type');
        },
        toCart(){
            this.$router.push('/cart');
        },
        toLogin(){
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
    width: 100%; position: relative;
}
 .topTitle{
     width: 100%; height: 40px; background: #de4943; color: #fff; 
     text-align: center; position: fixed; line-height: 40px; z-index: 1000;
     a{
         width: 30px; height: 40px; display: block; color: #fff; text-align: center; font-size: 12px; line-height: 40px;
     }
     .back{
         position: absolute; left: 20px;
     }
     .menu{
         position: absolute; right: 20px; top: 0px;
     }
     h3{
         font-size: 16px; font-weight: normal;
     }
 }
 .pull-down-menu{
     width: 100%; height: 45px; display: flex; justify-content: space-between;background-color: #efefef;
    color: #848d96; border-bottom: 1px solid #ccc; position: absolute; top: 40px;
     .down-menu-box{
         width: 25%; box-sizing: border-box; text-align: center; height: 100%; line-height: 45px;
        font-size: 14px;
     }
 }
</style>