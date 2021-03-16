const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./src/components/ResponsiveCarouselContainer.js",
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  target: 'node',
  externals: {
    react: 'react',
  }
};