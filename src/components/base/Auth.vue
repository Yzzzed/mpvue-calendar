<template>
  <van-popup :show="true" :overlay="true">
    <div class="wrapper">
      <van-button 
        square 
        type="info"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
        >授权登录</van-button>
    </div>
    <van-button round></van-button>
  </van-popup>
</template>

<style lang="stylus" scoped>
.wrapper
  display flex
  align-items center
  justify-content center
  height 100%
</style>

<script>
export default {
  methods: {
    getUserInfo () {
      this.$emit('getUserInfo')
    }
  }
}
</script>
