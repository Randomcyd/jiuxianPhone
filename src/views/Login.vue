<template>
    <div class="login">
        <top-title>用户登录</top-title>
        <div class="login-wrap">
            <div class="login-type">
                <a class="username-type" :class="{'type-active':typeActive==0}" @click="toggleType(0)">账号登录</a>
                <a class="phone-type" :class="{'type-active':typeActive==1}" @click="toggleType(1)">手机动态密码登录</a>
            </div>
            <div class="login-info">
                <van-cell-group v-if="typeActive==0">
                <van-field
                    v-model="username"
                    label=""
                    left-icon="manager"
                    placeholder="用户名/邮箱/手机号"
                />
                <van-field
                    v-model="password"
                    clearable
                    label=""
                    left-icon="coupon"
                    placeholder="密码"
                />
                </van-cell-group>
                <van-cell-group v-if="typeActive==1">
                <van-field
                    v-model="phoneNum"
                    label=""
                    left-icon="phone-circle"
                    placeholder="请输入手机号，新用户将自动注册"
                />
                <van-field
                    v-model="sms"
                    center
                    clearable
                    label=""
                    placeholder="请输入短信验证码"
                    >
                    <template #button>
                        <van-button size="small" type="primary">发送验证码</van-button>
                    </template>
                    </van-field>
                </van-cell-group>
            </div>
            <div class="login-btn" @click="login()">
                立即登录
            </div>
            <div class="tabs">
                <a class="register">免费注册</a>
                <a class="getback">找回密码</a>
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
            username:'',
            password:'',
            phoneNum:'',
            sms:'',
            typeActive:0,
        }
    },
    components:{
        topTitle
    },
    methods:{
        toggleType(index){
            this.typeActive = index;
        },
        login(){
            this.axios
            .post("/api1/user/ajax",{
                user_name:this.username,
                password:this.password,
                t:new Date(),
                verify_reg:0
            })
            .then((res) => {
            console.log(res);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
        width: 100%;
    }
    .login-wrap{
        width: 100%; position: absolute; top: 40px; left: 0;
    }
    .login-type{
        width: 84%;margin: 30px auto; overflow: hidden;
        a{
            display: block; color: #626365; font-size: 14px; padding-bottom: 2px;
        }
        .username-type{
            float: left;
        }
        .phone-type{
            float: right;
        }
        .type-active{
        color: #de4943; border-bottom: 3px solid #de4943;
    }
    }
    .login-info{
        width: 84%; margin: 0 auto;
    } 
    .van-cell{
        border: 1px solid #ccc; border-radius: 4px; padding: 8px 8px;
        margin: 30px 0;
    }
    .van-button--primary{
        background-color: #df3832; border: 0;
    }
    .login-btn{
        width: 84%; margin: 0 auto; height: 34px; background:#df3832 ;
        border-radius: 4px; line-height: 34px; text-align: center; color: #fff;
        font-size: 14px;
    }
    .tabs{
        width: 84%; margin: 20px auto; overflow: hidden; 
        font-size: 14px;
        .register{
            float: left;
        }
        .getback{
            float: right;
        }
    }
    
</style>