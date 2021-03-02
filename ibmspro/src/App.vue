<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    created () {
      console.log('App created')
      if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Blackerry|WebOS|Symbian|Windows Phone|Phone|Nokia|UCWEB)/i)) {
        this.setUserAgent('mb')
      } else {
        this.setUserAgent('pc')
      }
    },
    methods: {
      setUserAgent (val) {
        this.userAgent = val
        this.$store.commit('common/updateUserAgent', val)
      }
    }
  }
</script>
