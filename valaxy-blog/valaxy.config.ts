import type { UserThemeConfig } from "valaxy-theme-yun";
import { defineValaxyConfig } from "valaxy";

// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "Linking",
    },

    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
      {
        name: "分类",
        url: "/categories/",
        icon: "i-ri-apps-line",
        color: "dodgerblue",
      },
      {
        name: "标签",
        url: "/tags/",
        icon: "i-ri-bookmark-3-line",
        color: "dodgerblue",
      },
    ],

    colors: {
      //这里是主题色，你可以自定义主题色，也可以使用默认的主题色
      primary: '#FF0000',
    },
    footer: {
      //这里是页脚的设置，你可以设置备案信息，图标，版权信息，作者信息，友情链接，赞助信息，和背景图
      since: 2025,
      powered: false,
      cloud: {
        enable: true,
      },
      icon: {
        enable: true,
        name: "i-ri-money-cny-box-fill",
        url: "https://cdn.000000.cloud/img/20250524134505662.png",
        title: "???",
      },

      beian: {
        enable: false,
        icp: "",
      },
    },

    bg_image: {
      enable: true, //这里是背景图的设置，你可以设置白日模式和夜间模式的背景图
      url: "/light.jpg", // 白日模式背景
      dark: "/牛仔2.jpg", // 夜间模式背景
    },

    //鼠标点击烟花特效
    fireworks: {
      enable: true,
      colors: ["#000000", "#FFFFFF", "#007BFF"],
    },
  },

  unocss: { safelist },
});
