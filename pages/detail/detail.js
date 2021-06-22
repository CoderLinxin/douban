Page({
  onLoad(option) {
    const movie = JSON.parse(option.movie);
    this.setData({ title: movie.title });
  },
});
