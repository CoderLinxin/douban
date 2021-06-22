Component({
  data: {},
  properties: {
    movie: {
      type: Object,
      value: {},
    },
  },
  methods: {
    // 点击事件的响应函数
    clickItem() {
      const movieString = JSON.stringify(this.data.movie);
      wx.navigateTo({
        url: `/pages/detail/detail?movie=${movieString}`,
      });
      console.log("触发点击事件~");
    },
  },
});
