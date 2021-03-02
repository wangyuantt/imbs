/*
 * @Author: Wang Yuan 
 * @Date: 2021-03-01 22:49:42 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-01 22:57:00
 */
<template>
  <div class="login-data-form">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
      <el-form-item prop="mobile">
          <el-input v-model="dataForm.mobile" placeholder="帐号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
          <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button :loading="loading" class="login-btn-submit mobile-login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login-form',
  data () {
    return {
      loading: false,
      dataForm: {
        mobile: '',
        password: ''
      },
      dataRule: {
        mobile: [
          { required: true, message: '帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交表单
    dataFormSubmit () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$http({
            url: this.$http.adornUrl('/app/login'),
            method: 'post',
            data: this.$http.adornData({
              'mobile': this.dataForm.mobile,
              'password': this.dataForm.password
            })
          }).then(res => {
            this.loading = false
            if (res && res.code === 0) {
              this.$cookie.set('token', res.token)
              this.$router.replace({ name: 'home' })
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>

