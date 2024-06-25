const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /.css$/, // regex for the file types that you need to match for this rule to use the loader
        use: [
          { loader: "style-loader" }, // these loader are not built into webpack, you need to get it from npm
          { loader: "css-loader", options: { modules: true } },
        ],
      },
    ],
  },
};

// css-loader