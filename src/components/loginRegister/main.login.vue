<template>
    <div style="height: 100%">
        <div class="mask"></div>
        <div class="shadow loginDiv">
            <form action="http://192.168.12.54:8080/cas/login" method="post" target="_self">
                <div class="sDiv">
                    <el-button icon="el-icon-close" class="close" @click="hideLogin()"></el-button>
                    <h1 style="text-align: center;margin-top: 50px;">教育云平台</h1>
                    <div style="margin-top: 40px" class="l_w ">
                        <el-input v-model="userName" placeholder="请输入用户名" name="username" clearable></el-input>
                    </div>
                    <div class="l_w l_mt">
                        <el-input v-model="passWord" placeholder="请输入密码" type="password" name="password"
                                  clearable></el-input>
                    </div>
                    <div class="l_mt">
                        <el-checkbox v-model="forgetPass" class="f_l">记住密码</el-checkbox>
                        <a href="#" class="f_r">忘记密码？</a>
                    </div>
                    <input type="hidden" name="callback" value="feedBackUrlCallBack"/>
                    <input type="hidden" name="get-lt" value="true"/>
                    <input type="hidden" name="lt" :value="lt" id="J_LoginTicket">
                    <input type="hidden" name="execution" id="J_Execution" :value="execution"/>
                    <input type="hidden" name="_eventId" value="submit"/>
                    <input name="" @click="site_login" type="button" value="登录" class="l_w l_mt loginBtn"/>
                    <!-- <input name="" @click="site_login" type="submit" value="登录" class="l_w l_mt loginBtn"/> -->
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { loginService } from 'services/common.service';
export default {
    props: ['lt', 'execution'],
    data () {
        return {
            userName: '',
            passWord: '',
            forgetPass: true
        };
    },
    mounted () {
    },
    methods: {
        hideLogin () {
            this.$emit('closeLoginDialog', 'close');
        },
        site_login(params) {
            if (!params) params = {};
            if (!this.userName || !this.passWord) {
                alert('不能为空');
                return;
            }
            params = {loginname: this.userName, passWord: this.passWord};
            let v = this;
            loginService.getUserInfo(params).then(function (res) {
                console.log(res);
                v.$emit('closeLoginDialog', 'login');
            });
        }
    }
};
</script>
<style type="text/css" lang="scss">
    @import "./main.login.scss";
</style>
