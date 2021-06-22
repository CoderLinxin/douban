// app.js
App({
  onLaunch() {
    //onLaunch函数是用于小程序在初始化的时候执行的动作(此时App并没有创建完成)
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });

    // 设置一些公用资源
    wx.db = {};
    wx.db.toast = ({ title, icon, image = "", duration = 1500 }) => {
      wx.showToast({
        title,
        icon,
        image,
        duration,
      });
    };

    const info = wx.getSystemInfoSync();
    wx.db.statusBarHeight = info.statusBarHeight;
    if(info.platform === 'android'){
      wx.db.navBarHeight = 48;
    }else{
      wx.db.navBarHeight = 48;
    }
  },
  globalData: {
    userInfo: null,
  },
});
