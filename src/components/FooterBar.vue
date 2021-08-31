<template>
    <div id="footer">
            <ul>
                <li><a href="#"><img src="https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png" alt="#"></a></li>
                <li @click="toType()"><a><img src="https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png" alt="#"></a></li>
                <li><a><img src="https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png" alt="#"></a></li>
                <li @click="toCart()"><a><img src="https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png" alt="#"></a></li>
                <li @click="toLogin()"><a><img src="https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png" alt="#"></a></li>
            </ul>
        </div>
</template>

<script>
export default {
    methods:{
        toCart(){
            this.$router.push('/cart');
        },
        toType(){
            this.$router.push('/type');
        },
        toLogin(){
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>
    #footer{
        width: 100%; height: 42px; position: fixed; bottom: 0;
        border-top: 1px solid #cccccc;background: #f1f1f1;
        z-index: 1000;
    }

    ul{
        width: 100%; height: 100%; display: flex; justify-content: space-between;
        li{
            display: block; width: 20%; box-sizing: border-box;
        }
        a{
            display: flex;width: 42px;height: 42px;
            overflow: hidden;margin: 0 auto; align-items: center;
        }
        img{
            width: 42px; display: block; 
        }
    }
</style>