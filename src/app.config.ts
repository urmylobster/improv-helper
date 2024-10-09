export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/posts/posts',
    'pages/user/user'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  style: "v2",
  tabBar: {
    "color": "#8c8c8c",
    "selectedColor": "#FFC0CB",
    "backgroundColor": "white",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "./assets/home.png",
        "selectedIconPath": "./assets/home-active.png"
      },
      {
        "pagePath": "pages/posts/posts",
        "text": "收藏",
        "iconPath": "./assets/heart.png",
        "selectedIconPath": "./assets/heart-active.png"
      },
      {
        "pagePath": "pages/user/user",
        "text": "我的",
        "iconPath": "./assets/user.png",
        "selectedIconPath": "./assets/user-active.png"
      }
    ],
    position: "bottom"
  },
  rendererOptions: {
    "skyline": {
      "defaultDisplayBlock": true,
      "disableABTest": true,
      "sdkVersionBegin": "3.0.0",
      "sdkVersionEnd": "15.255.255"
    }
  },
  componentFramework: "glass-easel",
  sitemapLocation: "sitemap.json",
  lazyCodeLoading: "requiredComponents"
})
