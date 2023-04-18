interface IbaseOptions {
  url: string,
  data?: object,
  method?: string,
  [propName: string]: any
}

class Service {
  baseOptions = {
    url: 'https://dengcaocao.github.io/',
    data: {},
    header: {
      accessToken: '' // 用户认证
    },
    method: 'GET',
    timeout: 10000
  }
  request (options: IbaseOptions) {
    uni.showLoading({
      title: '稍等，正在从github.io上拉起数据呢!'
    })
    return new Promise((resolve, reject) => {
      const completeOptions: any = {
        ...this.baseOptions,
        ...options,
        url: this.baseOptions.url + options.url
      }
      uni.request({
        ...completeOptions,
        success: (res: object & { code: number }) => {
          if (res.code !== 200) throw new Error('唉，数据拉取失败!')
          resolve(res)
        },
        fail: (error: object & { message: string }) => {
          uni.showLoading({
            title: error.message
          })
          reject(error)
        },
        complete: () => uni.hideLoading()
      })
    })
  }
}

export default new Service()