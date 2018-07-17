// pages/yuexi/index.js
// const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    yuexi_create_step:1,
    p_info: { is_publish: '', r_place: '', r_time: '', place: '', time: '', title: ''},
    role_num: 1,
    role_name: [],
    xi_num: 1,
    xi_name:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //初始化角色列表
    var rolelist = this.data.role_name;
    var rolenum = this.data.role_num;
    for(var i=0;i<rolenum;i++){
      rolelist.push('');
    }
    this.setData({ role_name: rolelist });

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


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
  next_step:function(){
    this.setData({ yuexi_create_step:this.data.yuexi_create_step + 1});
  },
  prev_step: function () {
    this.setData({ yuexi_create_step: this.data.yuexi_create_step - 1 });
  },
  finish_step:function(){
    //提交表单数据
   console.log(this.data.p_info);
  },
  update_role_num : function(){
    var rolelist = this.data.role_name;
    var len = rolelist.length;
    var rolenum = this.data.role_num;
    console.log(rolenum);
    if (len > rolenum){
      this.setData({ role_num: len });
    }else{
      for (var i = 0; i < rolenum - len; i++) {
        rolelist.push('');
      }
      this.setData({ role_name: rolelist });
    }
    
    // console.log(this.data.p_info);
  },
  formSubmit: function (e) {

    var p_info = this.data.p_info;
    var rolelist = [];
    for (var key in e.detail.value) {
      var r = key.match(/^role_list/); 
      if(r){
        rolelist.push(e.detail.value[key]);
      } else if (key =='role_num'){
        this.setData({ role_num: e.detail.value[key] });
      }else{
        p_info[key] = e.detail.value[key];
      }
    }
    this.setData({ p_info: p_info });
    if (rolelist.length!=0){
      this.setData({ role_name: rolelist });
    }
    // console.log(this.data.p_info);
  }
})