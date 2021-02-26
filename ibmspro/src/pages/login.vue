/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-22 17:52:33 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-26 23:41:32
 */
<template>
    <div class="login full-page flex-center">
        <div class="login-action"  v-loading="formLoading" element-loading-text="加载中...">
            <el-row>
                <el-col :span="23">
                    <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="手机号" prop="checkPass">
                            <el-input v-model="username" autocomplete="off" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="pass" autocomplete="off" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width:100%" type="primary" @click="submitForm()">{{submitText}}</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span='23' style="text-align: end;padding-right:20px">
                    <el-link type="primary" @click="switchType">{{actionText}}</el-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            showRegister: true,
            username: '',
            pass: '',
            formLoading: false
        }
    },
    computed: {
        submitText () {
            return this.showRegister ? '登录' : '注册'
        },
        actionText () {
            return this.showRegister ? '去注册' : '去登录'
        }
    },
    methods: {
        submitForm () {
            if (!this.showRegister) {
                this.registerAction()
            } else {
                this.loginAction()
            }
        },
        loginAction () {
            this.formLoading = true
            let data = {
                "mobile": this.username,
                "password": this.pass
            }
            this.$vueHttp.post('/app/login', data).then(res => {
                this.formLoading = false
                if (res.code === 0) {
                    sessionStorage.setItem('token', res.token)
                    this.$router.push({
                        path: '/imbsPlatform/informationQuery'
                    })
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        switchType () {
            this.showRegister = !this.showRegister
        },
        registerAction () {
            this.formLoading = true
            let data = {
                "mobile": this.username,
                "password": this.pass
            }
            this.$vueHttp.post('/app/register', data).then(res => {
                this.formLoading = false
                if (res.code === 0) {
                    this.$message({
                        message: '注册成功！请登录',
                        type: 'success'
                    })
                    this.username = ''
                    this.pass = ''
                    this.showRegister = true
                } else {
                    this.$message.error(res.msg)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    background-color: #f3f5f7;
    .login-action {
        width:500px;
        height: 300px;
        padding-top: 50px;
        border-radius: 10px;
        background-color: #fff;
    }
}
</style>


