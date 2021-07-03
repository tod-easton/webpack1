const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // THIS LINE IS NEW 
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // THIS LINE IS NEW 

const path = require('path');

module.exports = {
  plugins: [new MiniCssExtractPlugin()], // THIS LINE IS NEW 
  entry: ['./src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // the `...` syntax on the next line extends the existing minimizers (i.e. `terser-webpack-plugin`), 
      // for example, if you want to keep minifiying javascript as you were before, keep the `...` 
      // before calling new CssMinimizerPlugin()
      // `...`,
      // new CssMinimizerPlugin(),
    ],
  },
};