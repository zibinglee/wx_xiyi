//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    products: [
      { id:1,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/76/84/ios_icon1_1026737684_100_100.png", title: "老旦白领紫老斗", price: 900, category:["老旦","褶子"] },
      { id: 2,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/55/09/ios_icon1_1214295509_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 3,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 4,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "八宝团寿香色对帔", price: 8000, category: ["老旦","老生", "帔"] },
    ],
    userInfo: {},

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    var ths = this;
    // wx.request({
    //   url: 'http://192.168.0.153/api/sdk_perform.php?sort=newest&limit=5&adsense=index', //最新演出接口
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     // console.log(res.data);
    //     ths.setData({ xi_list: res.data });
    //   }
    // });
    // wx.request({
    //   url: 'http://192.168.0.153/api/sdk_playactor.php?sort=newest&limit=2&adsense=index', //演员推荐接口
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     // console.log(res.data);
    //     ths.setData({ playactor_list: res.data });
    //   }
    // });
    // wx.request({
    //   url: 'http://192.168.0.153/api/sdk_banner.php?sort=newest&limit=2&adsense=index', //banner接口
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     // console.log(res.data);
    //     ths.setData({ slider: res.data });
    //   }
    // });
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
    var initdata = {
      nav: app.globalData.nav,
      route: "/" + this.route
    };

    this.setData(initdata);
  },
  //事件处理函数

});