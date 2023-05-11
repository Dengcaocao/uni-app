import service from '@/utils/request'

export default {
  queryBanner (params?: object) {
    return service.request({
      url: 'resources/db/banner.json'
    })
  },
  queryFirendChain (params?: object) {
    return service.request({
      url: 'resources/db/friendChain.json'
    })
  },
  queryCatetory (params?: object) {
    return service.request({
      url: 'resources/db/demo.json'
    })
  }
}