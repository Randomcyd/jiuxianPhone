<template>
    <div class="cate">
        <top-title>{{title}}</top-title>
        <div class="blank"></div>
        <download-app></download-app>
        <div class="cate-pic">
            <div class="left-pic">
                <img src="https://img08.jiuxian.com/bill/2021/0204/903fb42e5ff54f44a1931e724796563a.jpg" alt="">
            </div>
            <div class="right-pic">
                <img src="https://img07.jiuxian.com/bill/2020/1019/9da3bac4b4c44da084e8926b74b582a8.jpg" alt="">
                <img src="https://img08.jiuxian.com/bill/2019/0610/6a6ee77cb35a4afd883b52b8d4dacf78.jpg" alt="">
            </div>
        </div>
        <div class="cate-type">
            <a>茅台</a>
            <a>五粮液</a>
            <a>汾酒</a>
            <a>泸州老窖</a>
            <a>酱香</a>
            <a>清香</a>
            <a>浓香</a>
            <a class="getAll">查看全部</a>
        </div>
        <div class="recommend">
            <div class="title-line">
                <div class="line"></div>
                <h3>精品推荐</h3>
            </div>
            <div class="item-list">
                <div class="item-box" v-for="item in itemList" :key="item.proId">
                    <div class="item-pic">
                        <img src="http://img08.jiuxian.com/2021/0726/923e45cc085248d69d083d436b2a7d8c4.jpg" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-name">43°茅台飞天500ml</p>
                        <p class="item-price">￥{{item.shopPrice}}.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import downloadApp from "../components/DownloadApp.vue";
import topTitle from '../components/TopTitle.vue';
export default {
    data(){
        return {
            title:'',
            itemList:[],
        }
    },
    components: {
        downloadApp,
        topTitle
    },
    methods:{
        getItem(){
            this.axios
            .get("/api/m_v1/goods/getPriceByPids?1630587444343&ids=2%2C74745%2C51289%2C43265%2C600%2C55676%2C61826%2C53008%2C2693%2C83258%2C4081%2C51623%2C50471%2C44428%2C59627%2C30937%2C57697%2C35989%2C73255%2C43250%2C3132%2C18157%2C71066%2C34198%2C25813%2C30267%2C40383%2C79424%2C32344%2C31014%2C69552%2C45195%2C2467%2C67186%2C78253%2C29937%2C56622%2C31358%2C2929%2C10801%2C30385%2C10953")
            .then((res) => {
            this.itemList.push(...res.data)
            });
        }
    },
    created(){
        this.title = this.$route.query.cate;
        this.getItem();
    }
}
</script>

<style lang="scss" scoped>
.cate{
    width: 100%;
}
.blank{
     width: 100%; height: 40px; 
}
.cate-pic{
    width: 100%; display: flex; padding: 10px; box-sizing: border-box;
    .left-pic{
        width: 60%;
        img{
            display: block; width: 100%;
        }
    }
    .right-pic{
        width: 40%;
        img{
            width: 100%; display: block;
        }
    }
}
.cate-type{
    width: 100%; display: flex; justify-content: space-between;
    padding: 10px; box-sizing: border-box; flex-wrap: wrap;
    a{
        width: 23%; display: block; height: 32px;
            color: #373737;font-size: 15px;border: 1px solid #c3c3c3;
            border-radius: 2px; text-align: center; line-height: 32px;
            margin-bottom: 4px;
    }  
    .getAll{
        color: #de4943; font-weight: bold;
    }
}
.recommend{
    width: 100%;
    .title-line{
        width: 100%; height: 40px; position: relative;
        .line{
            width: 100%; height: 20px; position: absolute;
            border-bottom: 1px solid #A2A2A2;
        }
        h3{
            position: absolute; left: 0; right:0;bottom: 0; top: 0; margin: auto;
            width: 100px; text-align: center; line-height: 40px; z-index: 99; background: #fff;
        }
    }
}
.item-list{
    width: 100%; padding: 10px; box-sizing: border-box;
    .item-box{
        width: 100%; border-bottom: 2px solid #e7e7e7; display: flex; height: 120px;
        padding: 8px; box-sizing: border-box;
        .item-pic{
            width: 100px; height: 100%;
            img{
                display: block; width: 100%;
            }
        }
        .item-info{
            flex: 1; height: 100%; margin-left: 14px;
            .item-name{
            color: #000000; height: 36px; line-height: 18px; 
            font-size: 12px;
            }
            .item-price{
            color: #df4a44;font-weight: bold;margin-left: 2px;font-size: 18px;
            margin-top: 38px;
            }
        }
    }
}
</style>

