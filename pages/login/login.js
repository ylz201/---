// pages/login/login.js
var appInstance = getApp();
Page({
  data:{
    isShowingDialog:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
        // 页面显示
    },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
    login:function () {
        appInstance.checkState();
    },
    switchCount:function () {
        wx.navigateTo({
            url: '../switchCount/switchCount',
        })
    },
  regist:function(){
    wx.navigateTo({
      url: '../regist/regist',
    })
  }
})