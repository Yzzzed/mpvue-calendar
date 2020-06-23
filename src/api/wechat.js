export function getSetting (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
      if (res.authSetting[`scope.${auth}`]) {
        console.log(res)
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res)
    }
  })
}

export function getUserInfo (onSuccess, onFail) {
  mpvue.getUserInfo({
    success (res) {
      console.log(res)
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res) // 直接抛出异常
    }
  })
}

export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId (callback) {
  mpvue.login({
    success (res) {
      if (res.code) {
        const { code } = res
        getOpenId(code).then(res => {
          const {data: {data: { openid }}} = res
          setStorageSync('openId', openid)
          callback && callback(openid)
        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log(res)
      }
    },
    fail (res) {
      console.log(res)
    }
  })
}

export function register (openId, userInfo) {

}
