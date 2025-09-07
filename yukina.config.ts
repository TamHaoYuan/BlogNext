import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Yiyuan",
  subTitle: "Yiyuan's Blog",
  brandTitle: "Yiyuan's Blog",

  description: "Yiyuan的日常",

  site: "https://yukina-blog.vercel.app",

  locale: "zh-CN", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_link,
      href: "/link",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/TamHaoYuan/Blognext",
    },
  ],

  username: "一元钱Yiyuan",
  sign: "Non est ad astra mollis e terris via.",
  avatarUrl: "https://tamhaoyuan.github.io/img/avatar_hu_ca0d867dd8cbb070.png",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/TamHaoYuan/",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/1289125124/",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://i2.hdslb.com/bfs/new_dyn/365f13780d080898083007ce754bd78c384667818.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/2c0db353976fddc1f41e274868cb036a384667818.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/af550f7a1649569bc03144504486d7ce384667818.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/17de57828f758279eec225af69dcaf66384667818.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/23994030cca80cd27005cd12ef49362c384667818.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/365f13780d080898083007ce754bd78c384667818.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/ba8ce6b626ab3c97b48c58cf4e85a144172873598.jpg",
    "https://i2.hdslb.com/bfs/new_dyn/16a5d157cf52cfa66497470cf3a73e48172873598.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
