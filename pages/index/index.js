var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({
  data: {
    products: [
      { id:1,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/76/84/ios_icon1_1026737684_100_100.png", title: "老旦白领紫老斗", price: 900, category:["老旦","褶子"] },
      { id: 2,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/55/09/ios_icon1_1214295509_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 3,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "巡营老旦蟒", price: 8000, category: ["老旦", "蟒"] },
      { id: 4,icon: "http://172.31.5.8/newadmin/Uploads/pic/banner/95/85/ios_icon1_1026859585_100_100.png", title: "八宝团寿香色对帔", price: 8000, category: ["老旦","老生", "帔"] },
    ],
    recommend:[
      {
        "date": "2018-07-25",
        "week": "星期三",
        "list":[
          {
            type:"html",
            data:'<div class="pro-text"><h3>今天说说京绣。</h3><p>京绣又称宫绣，是盛行于燕京一带的一种刺绣，主要为宫廷、王公大臣服务，现在主要应用于戏曲戏衣。</p><p>代表作品：皇帝龙袍、官员补子、戏曲戏衣</p></div>'
            },
          {
            type: "prolist",
            data: [
              { id: 2, name: "香色如意老旦帔" },
              { id: 5, name: "蓝色鹤团大缎对帔" }
            ]
          }
        ]
      },
      {
        "date": "2018-07-24",
        "week": "星期二",
        "list": [
          {
            type:"html",
            data:'<div class="pro-text">大雨瓢泼，好好练习。</div>'
          }
        ]
      },
      {
        "date": "2018-07-23",
        "week": "星期一",
        "list": [
          {
            type:"prodetail",
            data:{
              img:"http://172.31.5.8/promotePic/20180720/resized_5cbec7a3145ae6fdcb719e7e42d7740e.jpg",
              id:"5",
              name:"杨门女将专用香色草龙团帔",
              price:"3200"
            }
          }
        ]
      }
      
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

    this.converdata();
    console.log(this.data);
  },
  converdata:function(data){
    var ths=this;
    var recommend = this.data.recommend;
    var item;
    for (var ri in recommend){
      item = recommend[ri].list;
      for (var li in item) {
        // console.log(item[li].data);
        if (item[li].type=='html'){
          WxParse.wxParse('tmp', 'html', item[li].data, ths, 0, 'aspectFill');
          recommend[ri].list[li].data = this.data.tmp.nodes;
        }
      }
    }
    ths.setData({ "recommend": recommend});
    
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