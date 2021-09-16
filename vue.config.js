module.exports = {
  pwa: {
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true,
    },
    name: "Whitestone Holdings, Inc.",
    themeColor: "#012F53",
    msTileColor: "#ffffff",
    manifestOptions: {
      background_color: "#ffffff",
    },
  },

  publicPath: "/",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
};
