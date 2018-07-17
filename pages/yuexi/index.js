// pages/yuexi/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getlist();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo:true
          })
        }
      });

    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  getlist: function(){
    var json = [
      {
        label: '2017-09-23 赤桑镇 石景山文化馆',
        id: 234
      },
      {
        label: "2017-09-24 遇皇后 海淀文化馆",
        id: 235
      },
      {
        label: "2017-09-25 打龙袍 东城文化馆",
        id: 236
      }
    ];
    this.setData({
      list: json
    })
  }
})