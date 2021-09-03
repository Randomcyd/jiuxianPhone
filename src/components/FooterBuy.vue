<template>
    <div class="footer-buy">
        <a class="customer-service"><van-icon name="friends" /><p>客服</p></a>
        <a class="collect" @click="toCollect()"><van-icon name="like" :class='{collect_active:collect==true}' /><p>收藏</p></a>
        <a class="cart" @click="toCart()"><van-icon name="cart" v-if="cartNum!=0" :badge="cartNum"  /><van-icon v-if="cartNum==0" name="cart"/><p>购物车</p></a>
        <a class="add-cart" @click="addCartAction()">加入购物车</a>
        <a class="buy" @click="toOrder()">立即购买</a>
    </div>
</template>
<script>
import Vuex from 'vuex';
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
    data(){
        return{
            itemNum:'',
            pid:'',
            collect:false,
        }
    },
    computed:Vuex.mapState(['cartNum']),
    methods:{
        addCartAction(){
            let id = this.$route.query.pid;
            this.axios
            .get("/api/m_v1/goods/detailPromo/"+id, {
            })
            .then((res) => {
            this.$store.dispatch('addItem',res);
            Toast('加入购物车成功');
            });
        },
        toCart(){
            this.$router.push('/cart');
        },
        toCollect(){
            this.collect = !this.collect;
        },
        toOrder(){
            this.$router.push({
                path:'/order',
                query:{
                    itemNum:this.itemNum,
                    pid:this.pid
                }
            });
        }
    },
    mounted(){  
        this.itemNum = this.$slots.default[0].text;
        this.pid = this.$route.query.pid;
    }
}
</script>

<style lang="scss" scoped>
    .footer-buy{
        width: 100%; height: 45px; position: fixed;bottom: 0;
        left: 0; z-index: 99;background-color: #fafafa; display: flex;
        a{
            text-align: center; height: 45px; line-height: 12px; font-size: 10px;
            padding: 0 5px; flex: 1; padding-top: 8px;
            i{
                font-size: 18px;
            }
        }
        .customer-service{
            border-top:1px solid #eee ;
        }
        .collect,.cart{
            border-left: 1px solid #eee; border-top:1px solid #eee ;
        }
        .add-cart{
            font-size: 14px;    background-color: #fc5a5a; flex: 2; color: #fff;line-height:45px;padding-top: 0px;
        }
        .buy{
            font-size: 14px;    background-color: #3c3f51; flex: 2;color: #fff;line-height:45px;padding-top:0px;
        }
        .collect_active{
            color: #fc5a5a;
        }
    }
</style>