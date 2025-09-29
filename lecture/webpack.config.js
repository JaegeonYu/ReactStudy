const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
const webpack = require("webpack");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 빠르게 하겠다.

  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            "@babel/preset-react",
          ],
          plugins: [
            isDevelopment &&
              require.resolve("@babel/plugin-proposal-class-properties"),
            isDevelopment && require.resolve("react-refresh/babel"),
          ].filter(Boolean),
        },

        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },

  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new RefreshWebpackPlugin(),
  ].filter(Boolean),

  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
    liveReload: false,
  },
};
