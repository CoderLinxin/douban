const data = require("./data.js");

Page({
  data: {
    allMovies: [
      {
        title: "影院热映",
        movie: [],
      },
      {
        title: "豆瓣热门",
        movie: [],
      },
      {
        title: "近期热门剧集",
        movie: [],
      },
    ],
  },

  search() {
    console.log("搜索影片~");
  },

  // 页面渲染完成后获取位置信息
  onLoad() {
    this.getLocation((city) => {
      // 由于豆瓣api不可用(这里采用固定数据模拟)
      console.log(city);
      wx.db.toast({
        title: "获取城市成功",
        icon: "success",
      });

      // 先获取本地缓存
      this.getLocalData();

      // 模拟将请求成功的数据更新到data中(需要使用setData)
      this.getData(null);
    });
  },

  getData(url) {
    setTimeout(() => {
      let keys = Object.keys(data);

      // 计算星星数
      for (let j = 0; j < keys.length; j++) {
        let movie = data[keys[j]];
        let movieItem = this.data.allMovies[j];
        for (let i = 0; i < movie.length; i++)
          this.calculateStarCount(movie[i]);
        movieItem.movie = movie;

        // 模拟设置缓存数据
        wx.setStorage({
          key: movieItem.title,
          data: movieItem.movie,
          success: (result) => {
            console.log("设置缓存成功~");
          },
        });
      }

      // 更新数据
      this.setData(this.data);
    }, 3000);
  },

  // 获取用户缓存数据
  getLocalData() {
    for (let i = 0; i < this.data.allMovies.length; i++) {
      let obj = this.data.allMovies[i];
      obj.movie = wx.getStorageSync(obj.title);
    }
    this.setData(this.data);
  },

  getLocation(getCity) {
    wx.getLocation({
      type: "wgs84",
      altitude: false,
      success: (result) => {
        var reqTask = wx.request({
          url: "https://api.map.baidu.com/reverse_geocoding/v3/",
          data: {
            output: "json",
            coordtype: "wgs8411",
            ak: "HlDCSTnmz84c63gwYjg9185rGbSmfm6X",
            location: result.latitude + "," + result.longitude,
          },
          success: (result) => {
            let city = result.data.result.addressComponent.city;
            city = city.substring(0, city.length - 1);
            getCity && getCity(city);
          },
          fail: () => {
            wx.db.toast({
              title: "获取城市失败",
              image: "/assets/imgs/upsdk_cancel_normal.png",
              icon: "success",
            });
            console.log("获取城市失败~");
          },
        });
      },
      fail: () => {
        console.log("获取位置失败~");
      },
    });
  },

  // 根据星级评分计算星星数
  calculateStarCount(movie) {
    movie.stars = {};
    movie.on = parseInt(movie.starScore / 10); // 计算满星的数量
    movie.half = +(movie.starScore - movie.on * 10 === 5); // 计算半星的数量
    movie.off = 5 - movie.on - movie.half; // 计算没有星的情况
  },

  // 查看更多
  viewMore(event) {
    const index = event.currentTarget.dataset.index;
    const obj = this.data.allMovies[index];
    wx.navigateTo({
      url: `/pages/list/list?title=${obj.title}`,
    });
  },
});
