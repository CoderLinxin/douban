/* 临时保存一些影片相关信息 */

const baseUrl = "https://img9.doubanio.com/view/photo/s_ratio_poster/public/";
const data = {};

// 影院热映
data.hotScreening = [
  {
    score: 6.9,
    starScore:'35',// 用来计算展示的星数(满星分数为50分)
    title: "黑白魔女库伊拉 Cruella (2021)",
    image: baseUrl + "p2653946775.webp",
  },
  {
    score: 6.5,
    starScore:'35',
    title: "招魂3",
    image: baseUrl + "p2641811991.webp",
  },
  {
    score: 5.5,
    starScore:'30',
    title: "秘密访客 ",
    image: baseUrl + "p2640266496.webp",
  },
  {
    score: 0,
    starScore:'0',
    title: "哆啦A梦：伴我同行2 STAND BY ME ドラえもん2 ",
    image: baseUrl + "p2641407963.webp",
  },
  {
    score: 5.1,
    starScore:'25',
    title: "电锯惊魂9：漩涡 Spiral: From the Book of Saw  ",
    image: baseUrl + "p2637809736.webp",
  },
  {
    score: 6.2,
    starScore:'30',
    title: "扫黑·决战 ",
    image: baseUrl + "p2641608918.webp",
  },
  {
    score: 9.4,
    starScore:'45',
    title: "老友记重聚特辑 Friends: The Reunion (2021)",
    image: baseUrl + "p2649579601.webp",
  },
  {
    score: 6.8,
    starScore:'35',
    title: "人之怒 Wrath of Man (2021)",
    image: baseUrl + "p2642842673.webp",
  },
  {
    score: 9.5,
    starScore:'50',
    title: "普吉岛的最后黄昏 แปลรักฉันด้วยใจเธอ Side Story (2021)",
    image: baseUrl + "p2652268085.webp",
  },
  {
    score: 5.0,
    starScore:'25',
    title: "明天会好的 (2021)",
    image: baseUrl + "p2638146404.webp",
  },
];

// 豆瓣热门
data.popular = [
  {
    score: 7.0,
    starScore:'35',
    title: "我的姐姐 (2021)",
    image: baseUrl + "p2630463690.webp",
  },
  {
    score: 0,
    starScore:'0',
    title: "鬼吹灯之黄皮子坟 (2021)",
    image: baseUrl + "p2654531984.webp",
  },
  {
    score: 8.0,
    starScore:'40',
    title: "鬼灭之刃 剧场版 无限列车篇 劇場版 鬼滅の刃 無限列車編 (2020)",
    image: baseUrl + "p2623798236.webp",
  },
  {
    score: 5.2,
    starScore:'25',
    title: "活死人军团 Army of the Dead (2021)",
    image: baseUrl + "p2643872011.webp",
  },
  {
    score: 8.5,
    starScore:'45',
    title: "兹山鱼谱 자산어보 (2021)",
    image: baseUrl + "p2634797286.webp",
  },
  {
    score: 6.9,
    starScore:'35',
    title: "酸酸甜甜 새콤달콤 (2021)",
    image: baseUrl + "p2648436850.webp",
  },
  {
    score: 5.3,
    starScore:'25',
    title: "追虎擒龙 (2021)",
    image: baseUrl + "p2637603645.webp",
  },
  {
    score: 7.3,
    starScore:'35',
    title: "第十一回 (2019)",
    image: baseUrl + "p2640758773.webp",
  },
  {
    score: 7.7,
    starScore:'40',
    title: "酒精计划 Druk (2020)",
    image: baseUrl + "p2628440526.webp",
  },
  {
    score: 7.6,
    starScore:'40',
    title: "悬崖之上 (2021)",
    image: baseUrl + "p2641614433.webp",
  },
];

// 近期热门剧集
data.recentlyHot = [
  {
    score: 7.9,
    starScore:'40',
    title: "小人物 Nobody (2021)",
    image: baseUrl + "p2633966702.webp",
  },
  {
    score: 9.0,
    starScore:'45',
    title: "夏目友人帐：石起和可疑来访者 夏目友人帳 石起こしと怪しき来訪者 (2021)",
    image: baseUrl + "p2630613895.webp",
  },
  {
    score: 0,
    starScore:'0',
    title: "无依之地 Nomadland (2020)",
    image: baseUrl + "p2630453887.webp",
  },
  {
    score: 6.2,
    starScore:'30',
    title: "寻汉计 (2021)",
    image: baseUrl + "p2641910067.webp",
  },
  {
    score: 6.0,
    starScore:'30',
    title: "窗里的女人 The Woman in the Window (2021)",
    image: baseUrl + "p2639263452.webp",
  },
  {
    score: 5.4,
    starScore:'25',
    title: "唐人街探案3 (2021)",
    image: baseUrl + "p2622388983.webp",
  },
  {
    score: 6.8,
    starScore:'35',
    title: "剧场版 情色小说家~playback~ 劇場版ポルノグラファー～プレイバック～ (2021)",
    image: baseUrl + "p2627012348.webp",
  },
  {
    score: 8.2,
    starScore:'40',
    title: "扎克·施奈德版正义联盟 Zack Snyder's Justice League (2021)",
    image: baseUrl + "p2634360594.webp",
  },
  {
    score: 7.1,
    starScore:'35',
    title: "新秩序 Nuevo orden (2020)",
    image: baseUrl + "p2621425700.webp",
  },
  {
    score: 7.5,
    starScore:'40',
    title: "奥斯陆 Oslo (2021)",
    image: baseUrl + "p2646178108.webp",
  },
];

module.exports = data;
