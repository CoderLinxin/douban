Page({
  data:{
    movies:[]
  },

  onLoad(option){
    this.setData({ title: option.title });

    // 读取缓存文件
    wx.getStorage({
      key: option.title,
      success: (result) => {
        this.setData({
          movies:result.data
        });
      }
    });
  },

  back(event){
    console.log('back:',event);
  },

  home(event){
    console.log('home:',event);
  }
})