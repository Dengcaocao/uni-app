class Service {
  count = 0
  baseOptions: UniApp.RequestOptions = {
    url: '/h5api/',
    data: {},
    header: {
      accessToken: '' // 用户认证
    },
    method: 'GET',
    timeout: 10000
  }
  request (options: UniApp.RequestOptions) {
    this.count ++
    uni.showLoading({ title: '努力加载中' })
    return new Promise((resolve, reject) => {
      const completeOptions: UniApp.RequestOptions = {
        ...this.baseOptions,
        ...options,
        url: this.baseOptions.url + options.url
      }
      uni.request({
        ...completeOptions,
        success: (res: UniApp.RequestSuccessCallbackResult) => {
          if (res.statusCode !== 200) throw new Error('唉，数据拉取失败!')
          resolve(res)
        },
        fail: (error: UniApp.AccessFailCallbackResult) => {
          uni.showLoading({
            title: error.errMsg
          })
          reject(error)
        },
        complete: () => {
          this.count --
          !this.count && uni.hideLoading()
        }
      })
    })
  }
}

export default new Service()