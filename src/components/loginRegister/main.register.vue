<template>
    <div>
        <div class="mask" @click="hideLogin()"></div>
        <div class="shadow regDiv loginDiv">
            <form action="http://192.168.12.54:8080/cas/login" method="post" target="_self">
                <div class="sDiv">
                    <el-button icon="el-icon-close" class="close" @click="hideLogin()"></el-button>
                    <h1 style="text-align: center;margin-top: 50px;">教育云平台</h1>
                    <div style="margin-top: 40px" class="l_w ">
                        <el-input v-model="userName" placeholder="请输入姓名" name="username" clearable></el-input>
                    </div>
                    <div class="l_w l_mt">
                        <el-input v-model="loginName" placeholder="请输入工号" name="loginname" clearable></el-input>
                    </div>
                    <div class="l_w l_mt">
                        <el-input v-model="passWord" placeholder="请输入密码" type="password" name="password"  clearable></el-input>
                    </div>
                    <div class="l_w l_mt">
                        <el-input v-model="Organization" placeholder="请选择组织" name="organization" clearable></el-input>
                    </div>
                    <div class="l_mt">
                        <span>性别</span>
                        <el-checkbox v-model="Male" class="f_m">男</el-checkbox>
                        <el-checkbox v-model="Female" class="f_f">女</el-checkbox>
                    </div>
                    <input type="hidden" name="callback" value="feedBackUrlCallBack"/>
                    <input type="hidden" name="get-lt" value="true"/>
                    <input type="hidden" name="lt" :value="lt">
                    <input type="hidden" name="execution" :value="execution"/>
                    <input type="hidden" name="_eventId" value="submit"/>
                    <input name="" @click="site_login" type="button" value="注 册" class="l_w l_mt loginBtn"/>
                </div>
            </form>
        </div>
    </div>
</template>
<script>

export default {
    props: ['lt', 'execution'],
    data () {
        return {
            userName: '',
            loginName: '',
            passWord: '',
            Organization: '',
            Male: false,
            Female: false
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
            this.$emit('closeLoginDialog', 'login');
        }
    }
};
</script>
<style type="text/css" lang="scss">
    @import "./main.login.scss";
</style>
