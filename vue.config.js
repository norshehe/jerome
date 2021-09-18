module.exports = {
  pwa: {
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true,
    },
    name: "Sales Order.",
    themeColor: "#012F53",
    msTileColor: "#ffffff",
    manifestOptions: {
      background_color: "#ffffff",
    },
  },

  publicPath: "jerome/",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Sales Order";
      return args;
    });
  },
};
