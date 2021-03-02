<template>
  <div class="login-site-wrapper site-page--login">
    <div class="site-mobile-content__wrapper">
      <div class="site-mobile-content">
        <h3 class="mobile-login-title">管理员登录</h3>
        <loginForm />
      </div>
    </div>
    <div class="login-site-content__wrapper">
      <div class="site-content">
        <div class="brand-info">
          <h3 class="brand-info__text">综合安防管理平台</h3>
          <p class="brand-info__intro">Comprehensive Security Management Platform</p>
        </div>
        <div class="login-main">
          <h3 class="login-title">管理员登录</h3>
          <loginForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import loginForm from '@/components/dataForm/login-form.vue'
  export default {
    name: 'login',
    components: {
      loginForm
    }
  }
</script>

<style lang="scss" soped>
@media screen and (max-width: 425px) {
  .login-site-wrapper{
    font-size: 16px;
    width: 100%;
    height: 100%;
    .login-site-content__wrapper {
      display: none;
    }
    .site-mobile-content__wrapper {
      display: block;
      width: 100%;
      height: 100%;
      .site-mobile-content {
        padding: 0 30px;
        .mobile-login-title {
          text-align: center;
        }
        .mobile-login-btn-submit {
          width: 100%
        }
      }
    }
  }
  
  .brand-info__text {
    color: #f66
  }
}
@media screen and (min-width: 426px) {
  .login-site-wrapper.site-page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(~@/assets/img/login_bg.jpg);
      background-size: cover;
    }
    .site-mobile-content__wrapper {
      display: none;
    }
    .login-site-content__wrapper {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }
    .site-content {
      min-height: 100%;
      padding: 30px 500px 30px 30px;
    }
    .brand-info {
      margin: 220px 100px 0 90px;
      color: #fff;
    }
    .brand-info__text {
      margin:  0 0 22px 0;
      font-size: 48px;
      font-weight: 400;
      text-transform : uppercase;
    }
    .brand-info__intro {
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.58;
      opacity: .6;
    }
    .login-main {
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }
    .login-title {
      font-size: 16px;
    }
    .login-captcha {
      overflow: hidden;
      > img {
        width: 100%;
        cursor: pointer;
      }
    }
    .login-btn-submit {
      width: 100%
    }
  }
}
</style>
