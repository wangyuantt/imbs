/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-22 17:52:33 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-23 12:15:28
 */
<template>
    <div class="login">
        <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            pass: ''
        }
    },
    methods: {
        submitForm () {
            console.log(this.username)
            let data = {
                "mobile": this.username,
                "password": this.pass
            }
            this.$vueHttp.post('/app/login', data).then(res => {
                console.log(res, 'login')
            })
        }
    }
}
</script>

