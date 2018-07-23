var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1, 
    banner: [
      // "http://localhost/9e9a6d25ly1ftgcy9nfqjj20p00gowuh.jpg",
      // "http://localhost/006nRLQJgy1ftge11qswvj30qo0k0dmz.jpg",
      "http://172.31.5.8/promotePic/20180720/resized_5cbec7a3145ae6fdcb719e7e42d7740e.jpg",
      "http://172.31.5.8/promotePic/banner/52/38/ios_pad_1359695238_600_400.jpg"
    ], 
    title: "老旦白领紫老斗", 
    price: 999.9, 
    category: ["老旦", "褶子"] ,
    inventory:3,
    images: [
      // "http://172.31.5.8/promotePic/20180720/resized_5cbec7a3145ae6fdcb719e7e42d7740e.jpg",
      // "http://172.31.5.8/promotePic/banner/52/38/ios_pad_1359695238_600_400.jpg"
    ],
    content:"纯真丝绉缎染色，<br /><img src='http://172.31.5.8/promotePic/banner/52/38/ios_pad_1359695238_600_400.jpg'>身长3尺3,<br />可在遇皇后、桑园会等戏使用。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ths = this;
    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
    });
    WxParse.wxParse('article', 'html', this.data.content, ths, 5);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var initdata = {
      nav: {
        style:'nav-buy',
        data: [
          { "text": "首页", "url": "/pages/index/index" },
          { "text": "购物车", "url": "/pages/index/index" },
          { "text": "立即购买", "url": "/pages/index/index", "style": "buy" },
          { "text": "加入购物车", "url": "/pages/index/index","style":"cart" },
        ]
      },
      route: "/" + this.route
    };
    //获取url里的参数key
    if (this.options.id) {
      initdata.proid = this.options.id;
    }
    this.setData(initdata);
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
  
  }
})