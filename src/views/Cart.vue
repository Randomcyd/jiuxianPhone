<template>
    <div class="cart">
        <top-title>购物车</top-title>
        <div class="item-wrap">
            <div class="item-box" v-for="item,index in cart" :key="index">  
                <div class="item-pic">
                    <img src="http://img09.jiuxian.com/2021/0726/9d73d6fee3144c789a84caadf8e0331d5.jpg" alt="">
                </div>
                <div class="item-info">
                    <h3>53°钓鱼台珍秘500ml</h3>
                    <p>¥{{item.data.productPromo.price}}.00</p>
                    <!-- <van-stepper v-model="itemTotal[index]"  input-width="24px" button-size="20px"/> -->
                    <div class="itemTotal">
                        <a class="sub" @click="subTotal(index)">-</a>
                        <input type="text" v-model="itemTotal[index]">
                        <a class="add" @click="addTotal(index)">+</a>
                    </div>
                </div>
                <input type="checkbox" checked="checked">
                <van-icon name="delete" size="20" @click="deleteItem(index)"/>
            </div>
        </div>
        <div class="payBar">
            <div class="chooseAll">
                <input type="checkbox" checked="checked">
                <span>全选</span>
            </div>
            <div class="allPrice">
                <p>合计：<b>￥{{totalPrice}}.00</b></p>
                <span>优惠：￥0.00</span>
            </div>
            <div class="toPay">
                去结算({{cartNum}})
            </div>
        </div>
    </div>
</template>

<script>
import topTitle from '../components/TopTitle.vue';
import Vuex from 'vuex';
import Vue from 'vue';
export default {
    data(){
        return {
            value:2,
            itemTotal:[],
        }
    },
    components:{
        topTitle
    },
    computed:{
        ...Vuex.mapState(['cartNum','cart']),
        totalPrice(){
            let p = 0;
            this.$store.state.cart.forEach((item,index) => {
                p+=item.data.productPromo.price*this.itemTotal[index];
            });
            return p;
        },
        
    },
    methods:{
        getItemTotal(){
            let arr = [];
            for (let item of this.$store.state.cart) {
                arr.push(item.data.proTotal);
            }
            this.itemTotal = arr;  
        },
        subTotal(index){
            this.$store.state.cart[index].data.proTotal-=1;
            this.getItemTotal();
        },
        addTotal(index){
            this.$store.state.cart[index].data.proTotal+=1;
            this.getItemTotal();
        },
        deleteItem(index){
            this.$store.state.cart.splice(index,1);
            this.$store.state.cartNum-=1;
            this.getItemTotal();
        }
    },
    mounted(){
        this.getItemTotal();
    }

}
</script>

<style lang="scss" scoped>
    .cart{
        width: 100%;
    }
    .payBar{
        width: 100%; height: 50px; position: fixed;
        bottom: 0; left: 0; border-top: 1px solid #d9d9d9;
        z-index: 999; display: flex;
    }
    .chooseAll{
        width: 64px; height: 100%; display: flex; 
        input{
            display:block; height: 100%; margin: 0 10px;
        }
        span{
            display:block; height: 100%; line-height: 50px; text-align: center; font-size: 12px;
        }
    }
    .allPrice{
        flex: 1; padding: 4px 10px;
        p{
            color: #252525; font-size: 16px;
            b{
                font-weight: normal; color: #ff3333;
            }
        }
        span{
            color: #999;
        }
    }
    .toPay{
        width: 100px; height: 100%; color: #fff; background-color: #fd5a5b;
        text-align: center; line-height: 50px; word-spacing: normal;
    }
    .item-wrap{
        width: 100%; position: absolute; top: 40px; bottom: 51px; left: 0; 
        overflow: scroll; background: #eee; padding-top: 10px;
        .item-box{
            width: 100%; display: flex; height: 103px; box-sizing: border-box; 
            padding: 10px 0; background: #fff; position: relative; border-bottom: 1px solid #eee;
            input{
                position: absolute; left: 10px; top: 0; bottom: 0; margin: auto;
            }
            i{
                position: absolute; right: 20px; bottom: 10px; opacity: .5;
            }
        }
    }
    .item-pic{
        width: 80px; height: 80px; border: 1px solid #e8e8e8; margin-left: 40px;
        img{
            display: block; width: 100%;
        }
    }
    .item-info{
        flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        padding: 0 20px;
        h3{
            font-weight: 500; font-size: 14px; height: 36px; line-height: 18px;
        }
        p{
            font-size: 12px;color: #ff0000;
        }
        .itemTotal{
            width: 100%;
            .sub,.add{
                width: 20px; height: 20px; display: inline-block; background: #eee;
                line-height: 20px; text-align: center; border: 1px solid #ddd;
            }
            input{
                display: inline-block; width: 28px; height: 20px; 
                position: relative; left: 0; border: 0; text-align: center; border: 1px solid #ddd;
            }
        }
    }
</style>