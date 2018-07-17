//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    xi_list: [],
    playactor_list:[],
    slider: [],
    userInfo: {},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    var ths = this;
    wx.request({
      url: 'http://192.168.0.153/api/sdk_perform.php?sort=newest&limit=5&adsense=index', //最新演出接口
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data);
        ths.setData({ xi_list: res.data });
      }
    });
    wx.request({
      url: 'http://192.168.0.153/api/sdk_playactor.php?sort=newest&limit=2&adsense=index', //演员推荐接口
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data);
        ths.setData({ playactor_list: res.data });
      }
    });
    wx.request({
      url: 'http://192.168.0.153/api/sdk_banner.php?sort=newest&limit=2&adsense=index', //banner接口
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data);
        ths.setData({ slider: res.data });
      }
    });

  },
  onReady: function () {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
        })
      }
    })
    
  },
  //事件处理函数

});