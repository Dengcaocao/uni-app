import service from '@/utils/request'

export default {
  getBanner (params?: object) {
    return service.request({
      url: 'resources/db/index-demo.json'
    })
  }
}