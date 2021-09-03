<template>
    <div class="item">
        <top-title>商品详情</top-title>
        <div class="blank" style="height:40px"></div>
        <download-app></download-app>
        <div class="item-content">
            <div class="item-show">
                <div class="item-pic">
                    <img src="http://img09.jiuxian.com/2021/0726/9d73d6fee3144c789a84caadf8e0331d5.jpg" alt="">
                </div>
                <div class="item-name">43°茅台飞天500ml</div>
                <div class="adv-word">{{itemInfo.advWords}}</div>
                <div class="item-price"><span>￥</span>{{itemInfo.price+'.00'}}<del v-if="itemInfo.jxPrice">{{itemInfo.jxPrice+'.00'}}</del></div>
            </div>
            <div class="gold">
                <p>金币<span>赠送<b>{{itemInfo.goldCoinNum}}</b>个金币</span></p>
            </div>
            <div class="spc">
                <dt>规格</dt>
                <dd :class="{active:spcActive==0}" @click="switchSpc(0)">43°茅台飞天500ml</dd>
                <dd :class="{active:spcActive==1}" @click="switchSpc(1)">43°茅台飞天500ml（双瓶装）</dd>
            </div>
            <div class="buy-info">
                <div class="number">
                    <p>数量</p>
                    <van-stepper v-model="itemNum" />
                </div>
                <div class="address">
                    <p>送至</p>
                    <div class="address-box">
                        <van-field
                        v-model="fieldValue"
                        is-link
                        readonly
                        
                        placeholder="请选择所在地区"
                        @click="show = true"
                        />
                        <van-popup v-model="show" round position="bottom">
                        <van-cascader
                            v-model="cascaderValue"
                            title="请选择所在地区"
                            :options="options"
                            @close="show = false"
                            @finish="onFinish"
                        />
                        </van-popup>
                    </div>
                </div>
                <div class="tips">
                    <p>提示</p>
                    <div class="tips-list">
                        <p>此商品不能使用优惠券</p>
                        <p>每购买2瓶，即赠送原厂手提袋1个</p>
                    </div>
                </div>
            </div>
            <div class="security">
                <van-icon name="smile-o" color="#fc5a5a" /><span>正品保证</span>
                <van-icon name="expand-o" color="#fc5a5a" /><span>满100包邮</span>
                <van-icon name="coupon-o" color="#fc5a5a" /><span>七天退换</span>
            </div>
            <div class="merchant">
                <div class="logo">
                    <img src="http://img07.jiuxian.com/bill/2020/0717/4374a0ccfd0f4346887df1d0d766c3a4.jpg" alt="">
                </div>
                <div class="intro">
                    <p>茅台<span>北京</span></p>
                    <p>贵州茅台酒独产于中国的贵州省仁怀市茅台镇，是与苏格兰威士忌、法国科涅克白兰地齐名的三大蒸馏酒之一，</p>
                </div> 
            </div>
            <div class="item-detail">
                    <div class="word-detail">
                        <div class="key-box">香型</div>
                        <div class="value-box">酱香型</div>
                    </div>
                    <div class="pic-detail">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/34a12b75a46c488695c69114f5f4ac00.jpg">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/0abd22c430164c588a4ec580341ee740.jpg">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/fb7bff4ed48246b3996a64abaa2bb08b.jpg">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/a05ec88d12ab4929a5120218597ceaa9.jpg">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/cee7bdd3a4ee438e89627667fbeb58cb.jpg">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/47f9011af77b40c381d85182743de9bb.jpg">
                        <img src="http://img10.jiuxian.com/bill/2020/0930/bc51eaf795a241d58fa06f2100e2d057.jpg">
                    </div>
            </div>

        </div>
        <div class="blank" style="height:45px"></div>
        <footer-buy>{{itemNum}}</footer-buy>
    </div>
</template>

<script>
import topTitle from '../components/TopTitle.vue';
import downloadApp from "../components/DownloadApp.vue";
import footerBuy from "../components/FooterBuy.vue";
export default {
    data(){
        return {
            itemNum:1,
            pid:null,
            itemInfo:null,
            spcActive:0,
            show: false,
            fieldValue: '',
            cascaderValue: '',
            // 选项列表，children 代表子选项，支持多级嵌套
            options: [
                {
                text: '浙江省',
                value: '浙江省',
                children: [{ text: '杭州市', value: '杭州市' }],
                },
                {
                text: '江苏省',
                value: '江苏省',
                children: [{ text: '南京市', value: '南京市' }],
                },
            ],
        }
    },
    name:"Item",
    components:{
        topTitle,
        downloadApp,
        footerBuy
    },
    methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
      this.$store.dispatch('changeLocal',this.cascaderValue);
    },
    getItemInfo(){
        this.pid = this.$route.query.pid
        this.axios
        .get("/api/m_v1/goods/detailPromo/"+this.pid, {
        })
        .then((res) => {
          this.itemInfo = res.data.productPromo;
        });
    },
    //选择规格
    switchSpc(num){
        this.spcActive = num;
    }
  },
  created(){
        this.getItemInfo();
    }
}
</script>

<style lang="scss" scoped>
    .black{
        width: 100%;
    }
    .item{
        width: 100%;
        .item-content{
            width: 100%; height: 100%; overflow: scroll; 
        }
    }
    .item-show{
        width: 100%; padding-bottom: 10px;
        .item-pic{
            width: 100%; box-sizing: border-box; text-align: center; height: 320px;
            img{
                height: 100%;
            }
        }
        .item-name{
            font-size: 16px; margin-left: 20px; font-weight: bold;
            height: 30px; line-height: 30px;
        }
        .item-price{
            color: #fc5a5a; font-size: 22px; margin-left: 20px; margin-top: 6px;
            span{
                font-size: 14px; position: relative; bottom: 1px;
            }
            del{
                color: #999; font-size: 14px; margin-left: 10px;
            }
        }
        .adv-word{
            font-size: 13px;color: #fc5a5a;margin-left: 20px;
        }
    }
    .gold{
        width: 100%; height: 45px;
        border-top: 10px solid #eee; line-height: 45px; color:#666;
        p{
            width: 100%; height: 45px; line-height: 45px; text-indent: 20px;
        }
        span{
            color: #252525; margin-left: 20px;
            b{
                font-weight: normal;color: #fc6a6a; margin: 0 1px;
            }
        }
    }
    .spc{
        width: 100%; border-top: 10px solid #eee; box-sizing: border-box;
        padding: 10px 20px; padding-bottom: 20px;
        dt{
            margin: 6px 0;
        }
        dd{
            margin-top: 10px;background: #f5f5f5;border-radius: 13px 13px 13px 13px;
            width: auto; font-size: 12px; padding: 4px; text-indent: 20px;
        }
        .active{
            border: 1px solid #fc6a6a; color: #fc6a6a; background: #ffeeee;
        }
    }
    .buy-info{
        width: 100%; border-top: 10px solid #eee; padding-bottom: 10px;
    }
    .number{
        width: 100%; display: flex; height: 30px; line-height: 30px;
        padding: 10px 0; text-indent: 20px;
    }
    .address{
        width: 100%; display: flex; height: 30px; line-height: 30px;
        padding: 10px 0; text-indent: 20px;
    }
    .address-box{
        display: flex; align-items: center; flex: 1;
    }
    .tips{
        width: 100%; display: flex;  line-height: 30px;
        padding: 10px 0; text-indent: 20px;
    }
    .security{
        width: 100%;  padding: 10px 12px;border-bottom: 1px solid #e2e2e2;
        background: #f9f9f9; height: 20px; 
        span{
            font-size: 12px; margin-right: 14px; vertical-align: middle;
        }
        i{
            vertical-align: middle; margin: 0 1px;
        }
    }
    .merchant{
        width: 100%; display: flex; padding: 10px; box-sizing: border-box; height: 84px;
        font-size: 12px; border-top: 10px solid #eee;border-bottom: 10px solid #eee;
        .logo{
            width: 84px; height: 44px;
            img{
                width: 100%; display: block; margin-top: 3px;
            }
        }
        .intro{
            flex: 1; 
            p{
                height: 22px; text-overflow: ellipsis; overflow: hidden; width: 240px;
                line-height: 22px; white-space:nowrap;
            }
            span{
                color: #999; margin-left: 10px;
            }
        }
    }
    .item-detail{
        width: 100%; padding: 10px 20px; box-sizing: border-box
    }
    .word-detail{
        width: 100%; display: flex; font-size: 12px;
        .key-box{
            width: 28%; color: #999;
        }
        .value-box{
            width: 72%; color: #252525;
        }
    }
    .pic-detail{
        width: 100%;
        img{
            width: 100%; display: block;
        }
    }

</style>