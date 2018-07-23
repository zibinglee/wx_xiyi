// pages/product/list.js
const app = getApp()
Page({
  data: {
    pagelabel: "所有产品",
    products: [
      { id: 1, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/76/84/ios_icon1_1026737684_100_100.png", title: "老旦白领紫老斗", price: 900, category: ["老旦", "褶子"] },
      { id: 2, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/55/09/ios_icon1_1214295509_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 3, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 4, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "八宝团寿香色对帔", price: 8000, category: ["老旦", "老生", "帔"] }, 
      { id: 1, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/76/84/ios_icon1_1026737684_100_100.png", title: "老旦白领紫老斗", price: 900, category: ["老旦", "褶子"] },
      { id: 2, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/55/09/ios_icon1_1214295509_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 3, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 4, icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "八宝团寿香色对帔", price: 8000, category: ["老旦", "老生", "帔"] },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var initdata = {
      nav: app.globalData.nav,
      route: "/" + this.route
    };
    //获取url里的参数key
    if (this.options.key) {
      initdata.pagelabel = this.options.key;
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