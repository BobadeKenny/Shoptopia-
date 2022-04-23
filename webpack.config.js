var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  // devserver: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   open: true,
  //   clientLogLevel: 'silent',
  //   port: 5000
  // },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
//   devtool: "#source-map",
};
