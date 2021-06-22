Component({
  data: {
    statusBarStyle: "",
    navBarStyle: "",
    occupyHeight: 0,
  },
  properties: {
    title: {
      type: String,
      value: "",
    },
    titleColor: {
      type: String,
      value: "#000",
    },
    statusBarColor: {
      type: String,
      value: "#fff",
    },
    navBarColor: {
      type: String,
      value: "#fff",
    },
    back: {
      type: Boolean,
      value: true,
    },
    home: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    // 返回上一页
    back() {
      wx.navigateBack({
        delta: 1,
      });

      this.triggerEvent("backTap", {});
    },

    // 返回首页
    home() {
      wx.navigateBack({
        delta: 999,
      });

      this.triggerEvent("homeTap", { name: "张三", age: 18 });
    },
  },

  lifetimes: {
    // 2.2.3版本以上支持(需要设置一下模拟器版本)
    attached: function () {
      const statusBarStyle = `
          height:${wx.db.statusBarHeight}px;
          background-color:${this.data.statusBarColor};
        `;
      const navBarStyle = `
          color:${this.data.titleColor};
          height:${wx.db.navBarHeight}px;
          background-color:${this.data.navBarColor};
        `;
      const occupyHeight = wx.db.statusBarHeight + wx.db.navBarHeight;
      this.setData({
        statusBarStyle,
        navBarStyle,
        occupyHeight,
      });
    },
  },
});
