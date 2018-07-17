// const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    input_role:'',
    step:4,
    step_title: '',
    p_info: { name: '赤桑镇', time: '35min', desc: '略' },
    role_name: ['包拯','吴妙贞','王朝','马汉','院子'],
    proplist:{'院子':'罗帽','包拯':'黑蟒、相纱、黄玉带、厚底、紫彩裤、紫衬褶子','吴妙贞':'紫帔'},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setpagetitle();
    this.reset_proplist();
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
  setpagetitle:function(){
    var step_title = ['剧目基础信息', '添加角色','角色服装、场面道具', '信息确认'];
    this.setData({ step_title: step_title.slice(this.data.step - 1, this.data.step) });
  },
  next_step: function () {
    this.setData({ step: this.data.step + 1 });
    this.setpagetitle();
  },
  prev_step: function () {
    this.setData({ step: this.data.step - 1 });
    this.setpagetitle();
  },
  finish_step: function () {
    //提交表单数据
    console.log(this.data.p_info);

    wx.navigateTo({
      url: 'index'
    })
  },
  role_change:function(e){
    console.log(e.currentTarget.dataset);
  },
  del_role:function(e){
    var index = e.currentTarget.dataset.index;
    var role_name = this.data.role_name;
    role_name.splice(index, 1);
    this.setData({ role_name: role_name });

  },
  reset_proplist:function(){
    var tmp={};
    var role='';
    var role_name = this.data.role_name;
    var proplist = this.data.proplist;
    for (var i = 0; i < role_name.length;i++){
      role = role_name[i];
      if (!proplist[role]) {
        tmp[role]='';
      }else{
        tmp[role] = proplist[role];
      }
    }
    
    this.setData({ proplist: tmp });
  },
  formSubmit: function (e) {

    var p_info = this.data.p_info;
    var rolelist = [];
    var role_name = this.data.role_name;
    var proplist = this.data.proplist;
    for (var key in e.detail.value) {
      if (e.detail.value[key]==''){
        continue;
      }
      var r = key.match(/^prop_(.*)/);
      if (r) {
        proplist[r[1]] = e.detail.value[key];
      } else if (key == 'role') {
        role_name.push(e.detail.value[key]);
        this.setData({ input_role: '' });
      }else {
        p_info[key] = e.detail.value[key];
      }
    }
    this.setData({ p_info: p_info });
    // if (rolelist.length != 0) {
    //   this.setData({ role_name: rolelist });
    // }
    if (role_name.length != 0) {
      this.setData({ role_name: role_name });
    }
    if (proplist.length != 0) {
      this.setData({ proplist: proplist });
    }
    this.reset_proplist();
    console.log(this.data);
  }
  
})