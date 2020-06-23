<template>
  <div>
    <Auth
      v-if="!ifAuth"
      @getUserInfo="init"
    ></Auth>
    <div
      class="home"
      v-if="ifAuth"
    >1111</div>
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
  import { getSetting, getUserInfo, setStorageSync, getStorageSync, getUserOpenId } from '@/api/wechat'
  import { register } from '@/api/index'
  import Auth from '@/components/base/Auth'
  export default {
    components: {
      Auth
    },
    data () {
      return {
        ifAuth: true
      }
    },
    methods: {
      getSetting () {
        getSetting(
          'userInfo',
          () => {
            this.ifAuth = true
            this.getUserInfo()
          },
          () => {
            this.ifAuth = false
          }
        )
      },
      getUserInfo () {
        const onOpenIdComplete = (openId, userInfo) => {
          console.log('成功获得openid！', openId)
          register(openId, userInfo)
        }
        getUserInfo(
          (userInfo) => {
            console.log(userInfo)
            setStorageSync('userInfo', userInfo)
            const openId = getStorageSync('openId')
            if (!openId || openId.length === 0) {
              getUserOpenId(openId => onOpenIdComplete(openId, userInfo))
            } else {
              console.log('已获得openid')
              onOpenIdComplete(openId, userInfo)
            }
          },
          (res) => {
            console.log('failed...', res)
          }
        )
      },
      init () {
        this.getSetting()
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
