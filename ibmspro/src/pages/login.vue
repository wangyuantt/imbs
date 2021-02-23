/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-22 17:52:33 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 12:37:16
 */
<template>
    <div class="login">
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" v-loading="formLoading">
                    <el-form-item label="用户名" prop="checkPass">
                        <el-input type="password" v-model="username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            pass: '',
            formLoading: false
        }
    },
    methods: {
        submitForm () {
            this.formLoading = true
            let data = {
                "mobile": this.username,
                "password": this.pass
            }
            this.$vueHttp.post('/app/login', data).then(res => {
                this.formLoading = false
                if (res.code) {
                    this.$router.push({
                        path: '/index'
                    })
                }
            })
        }
    }
}
</script>

