var path = require("path"),
webpack = require("webpack"),
minimize = process.argv.indexOf('--minimize') !== -1,
plugins = [];

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = { 
  devtool: 'inline-source-map',
  entry: {
    test: ["./test/PasswordStrengthSpec.js"],
    build: ["./client/client.js"]
  },
  output: { 
    path: path.resolve(__dirname, "build"),
    filename: '[name].js',
    publicPath: '/build'
  },
  plugins: plugins, 
  module: {
    loaders: [
      {  
        test: /\.js$/,      
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','es2015']
        }       
      }
    ]
  }
}
