// pages/login.js
Page({
  weChatLogin() {
    console.log("微信登录");
  },

  douBanLogin() {
    console.log("豆瓣登录");
  },
  
  //路由跳转
  skipAgreement() {
    wx.navigateTo({
      url: "/pages/agreement/agreement",
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },
});
