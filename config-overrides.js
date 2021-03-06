/*
 * @Author: your name
 * @Date: 2021-03-11 23:12:40
 * @LastEditTime: 2021-03-11 23:35:51
 * @LastEditors: Please set LastEditors
 * @Description: 修改webpack配置
 * @FilePath: \react-jianshi01\config-overrides.js
 */

const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addPostcssPlugins,
} = require("customize-cra");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === "production") {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    // config.output.path = resolve('dist');
    // config.output.publicPath = './';
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      })
    );
  }
  return config;
};

const devServerConfig = () => (config) => {
  return {
    ...config,
    proxy: {
    //   "/api": {
    //     target: "xxx",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "/api",
    //     },
    //   },
    },
  };
};

module.exports = {
  webpack: override(
    // 配置antd 的按需引入
    // fixBabelImports("import", {
    //   libraryName: "antd-mobile",
    //   style: "css",
    // }),
    // 配置路径访问快捷键 @/xxx
    addWebpackAlias({
      "@": resolve("src"),
    }),
    // postCss 自动将px转为rem 需要配合 lib-flexible 使用
    // addPostcssPlugins([
    //   require("postcss-pxtorem")({
    //     rootValue: 75,
    //     propList: ["*"],
    //     minPixelValue: 2,
    //     selectorBlackList: ["am-"],
    //   }),
    // ]),
    // 压缩js等
    addCustomize()
  ),
  // 本地启动配置，可以设置代理
  devServer: overrideDevServer(devServerConfig()),
};
