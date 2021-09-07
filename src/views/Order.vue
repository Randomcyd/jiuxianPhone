<template>
    <div class="order">
        <div class="top-bar">
            <a @click="toBack()"><van-icon name="arrow-left" /></a>
            <h3>填写订单</h3>
        </div>
        <div class="content">
            <div class="address">
                <p>新建收货地址以确保商品正常派送哦~</p>
                <van-icon name="arrow" />
            </div>
            <div class="item-list">
                <div class="item-box">  
                <div class="item-pic">
                    <img src="http://img09.jiuxian.com/2021/0726/9d73d6fee3144c789a84caadf8e0331d5.jpg" alt="">
                </div>
                <div class="item-info">
                    <h3>53°钓鱼台珍秘500ml</h3>
                    <p>¥{{itemInfo.price}}.00</p>
                    <div class="item-num">
                        x{{itemNum}}
                    </div>
                </div>
            </div>
            </div>
            <div class="payInfo">
                <div class="payWay">
                    <p class="payTitle">支付方式</p>
                    <div class="payTab">
                        <input type="radio" name="pay" value="在线付款" checked/>在线付款
                        <input type="radio" name="pay" value="货到付款" />货到付款
                    </div>
                </div>
                <div class="invoice">
                    <van-field
                    v-model="fieldValue"
                    is-link
                    readonly
                    label="发票信息"
                    placeholder="请选择发票类型"
                    @click="show = true"
                    />
                    <van-popup v-model="show" round position="bottom">
                    <van-cascader
                        v-model="cascaderValue"
                        :options="options"
                        @close="show = false"
                        @finish="onFinish"
                    />
                    </van-popup>
                </div>
            </div>
            <div class="payInfo">
                <div class="payWay">
                    <p class="payTitle">返现</p>
                    <div class="payTab">
                        <span>暂无可用</span>
                    </div>
                </div>
                <div class="invoice">
                    <van-field
                    v-model="fieldValue1"
                    is-link
                    readonly
                    label="优惠券"
                    placeholder="请选择优惠券"
                    @click="show1 = true"
                    />
                    <van-popup v-model="show1" round position="bottom">
                    <van-cascader
                        v-model="cascaderValue1"
                        :options="options2"
                        @close="show = false"
                        @finish="onFinish1"
                    />
                    </van-popup>
                </div>
            </div>
            <div class="payInfo">
                <div class="payWay">
                    <p class="payTitle" style="float:left">商品金额</p>
                    <div class="payTab" style="float:right">
                        <span style="color: #ff3333;">¥{{itemInfo.price}}.00</span>
                    </div>
                </div>
                <div class="payWay">
                    <p class="payTitle">运费</p>
                    <div class="payTab">
                        <span style="color: #ff3333;">¥10.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBar">
            <p>应付金额:<span>¥{{itemInfo.price+10}}.00</span></p>
            <a class="submit">提交订单</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            itemNum:'',
            itemList:[],
            pid:'',
            itemInfo:'',
            show: false,
            show1:false,
            fieldValue: '',
            fieldValue1: '',
            cascaderValue: '',
            cascaderValue1: '',
            // 选项列表，children 代表子选项，支持多级嵌套
            options: [
                {
                text: '普通发票',
                value: '0',
                },
                {
                text: '电子发票',
                value: '1',
                },
                {
                text: '不需要发票',
                value: '2',
                },
            ],
            options2: [
                {
                text: '满40-20',
                value: '00',
                },
                {
                text: '满70-30',
                value: '11',
                },
                {
                text: '满140-50',
                value: '22',
                },
            ],
        }
    },
    methods:{
        toBack(){
            this.$router.go(-1);
        },
         onFinish({ selectedOptions }) {
        this.show = false;
        this.fieldValue = selectedOptions.map((option) => option.text).join('/');
        },
        onFinish1({ selectedOptions }) {
        this.show1 = false;
        this.fieldValue1 = selectedOptions.map((option2) => option2.text).join('/');
        },
        getItemInfo(){
        this.pid = this.$route.query.pid
        this.axios
        .get("/api/m_v1/goods/detailPromo/"+this.pid, {
        })
        .then((res) => {
          this.itemInfo = res.data.productPromo;
        })
    },
    
    },
    mounted(){
        this.itemNum = this.$route.query.itemNum;
        this.getItemInfo();    
    }
}
</script>

<style lang="scss" scoped>
.order{
    width: 100%; 
}
.top-bar{
    width: 100%; height:40px; font-size: 16px; color: #252525; text-align: center;
    background: #fafafa; border-bottom: 1px solid #e8e8e8; position: relative;
    a{
        display: block; width: 30px; height: 100%; position: absolute;
        left: 4px; top: 10px;
        i{
            font-size: 20px;
        }
    }
    h3{
        width: 100%; height: 100%; line-height: 40px; font-weight: normal;
        font-size: 16px;
    }
}
.content{
    width: 100%; 
}
.address{
    width: 100%; height: 68px; border-top: 10px solid #f4f4f4;
    border-bottom: 1px solid #ebe7c2; position: relative;
    p{
        width: 100%; height: 100%; line-height: 68px;
        font-size: 12px; color: #666; text-align: center;
    }
    i{
        position: absolute; font-size: 14px; right: 14px; top: 28px; bottom: 0; 
    }
}
.item-list{
    width: 100%;  background: #f4f4f4; padding-top: 10px;
    .item-box{
            width: 100%; display: flex; height: 103px; box-sizing: border-box; 
            padding: 10px 0; background: #fff; position: relative; border-bottom: 1px solid #eee;
        }
    .item-pic{
        width: 80px; height: 80px; border: 1px solid #e8e8e8; margin-left: 10px;
        img{
            display: block; width: 100%;
        }
    }
    .item-info{
        flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        padding: 0 20px; position: relative;
        h3{
            font-weight: 500; font-size: 14px; height: 36px; line-height: 18px;
        }
        p{
            font-size: 12px;color: #ff0000;
        }
        .item-num{
            position: absolute; right: 10px; bottom: 0;
        }
    }
}
.payInfo{
    width: 100%;border-top: 10px solid #f4f4f4;
    box-sizing: border-box; padding: 0 12px; padding-bottom: 4px;
    .payWay{
        width: 100%; height: 44px; line-height: 44px; padding: 4px 16px;
        box-sizing: border-box; font-size: 14px; color: #646566; display: flex;
        justify-content: space-between; 
        .payTitle{
            height: 36px; line-height: 50px; 
        }
        .payTab{
            height: 36px; line-height: 50px;  margin-left: 40px;
            input{
                margin-left: 20px; margin-right: 4px; position: relative; top: 1px;
            }
        }

    }
    .invoice{
        width: 100%; height: 44px; line-height: 44px;
    }
}
.footerBar{
    width: 100%;height: 49px; position: fixed;
    bottom: 0;z-index: 10;border-top: 1px solid #ccc;
    background: #f1f1f1;color: #666; line-height: 49px;
    p{
        font-size: 12px; float: left; margin-left: 20px; height: 100%; line-height: 49px;
        span{
            font-size: 20px;  color: #ff3333; position: relative;
            top: 2px; left: 8px;
        }
    }
    a{
        display: block; width: 100px; height: 50px; line-height: 50px;
        color: #fff; background:#ff3333 ; float: right; text-align: center;
    }
}
</style>