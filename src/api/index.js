import { get, post, patch, del } from '../utils/request'

export function register (openId, userInfo) {
  return post(`url`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  })
}
