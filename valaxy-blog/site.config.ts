import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "https://000000.cloud/", //你网站的URL
  favicon: "/tans.png", // 网页图标链接
  lang: "zh-CN", //默认语言
  title: "-Link's Nook-", //网站标题
  subtitle: "the same mood", //网站副标题

  author: {
    name: "link", //博主名称
    avatar: "https://cdn.000000.cloud/img/微信图片_20250523164452.jpg", //头像链接
    status: {
      emoji: "⛓️", // 头像旁边的emoji
      message: "fuck the world",
    },
    intro: "",
  },
  description: "Personal Site & Stories", //网站描述
  social: [
    {
      name: "RSS",
      link: "/atom.xml",
      icon: "i-ri-rss-line",
      color: "orange",
    },
    // {
    //   name: 'QQ 群 1050458482',
    //   link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    {
      name: "GitHub",
      link: "https://github.com/solink7",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    {
      name: "网易云音乐",
      link: "https://music.163.com/#/user/home?id=394384307",
      icon: "i-ri-netease-cloud-music-line",
      color: "#C20C0C",
    },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/360764581",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    {
      name: "Twitter",
      link: "https://x.com/bblink777",
      icon: "i-ri-twitter-x-fill",
      color: "black",
    },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: "E-Mail",
      link: "mailto:bluebaby88.0527@gmail.com",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
    {
      name: "Travelling",
      link: "https://www.travellings.cn/go.html",
      icon: "i-ri-train-line",
      color: "var(--va-c-text)",
    },
  ],

  search: {
    enable: true,
  },
  statistics: {
    enable: true,
    readTime: {
      /*阅读速度*/
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  sponsor: {
    enable: true,
    title: "我需要钱！",
    description:"感谢您的投喂😊",
    methods: [
      {
        name: "支付宝",
        url: "https://cdn.000000.cloud/img/alipay-qrcode.jpg.jpg",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
      // {
      //   name: "QQ 支付",
      //   url: "https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png",
      //   color: "#12B7F5",
      //   icon: "i-ri-qq-line",
      // },
      {
        name: "微信支付",
        url: "https://cdn.000000.cloud/img/wechatpay-qrcode.jpg",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line",
      },
    ],
  },
});
