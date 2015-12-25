var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var autoload = {
    React:'react',
    ReactDOM:'react-dom',
};
config = {
  devtool:'cheap-module-eval-source-map',
  entry: {
    app: [
      './src/app',
      './src/style/app.less',
    ],
    vendors:[
      'react',
      'react-dom',
      'react-router',
      'expose?$!expose?jQuery!jquery',
      'expose?_!underscore',
      'bootstrap', 'bootstrap/dist/css/bootstrap.css', 'bootstrap/dist/css/bootstrap-theme.css',
    ]
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename:'js/[name].js',
    publicPath: '/assets/',
  },
  resolve:{
    extensions:['', '.js', '.json', '.jsx', '.jml', '.react.js'],
    modulesDirectories: ['bower_components', 'node_modules', './'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'] // 'babel-loader' is also a legal name to reference
      },
      { test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000&minetype=application/font-woff" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]" },
      { test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=svg/[name].[ext]" },
      {
        test: /\.(less|css)$/, // Only .less files
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') // Run both loaders
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin(autoload),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/src/index.html',
    }),
  ]
};

if (process.env.NODE_ENV != 'production') {
  config.entry.app.splice(0, 0, 'webpack/hot/dev-server');
  config.entry.app.splice(0, 0, 'webpack-dev-server/client?' + (process.env.WEBPACK_DEV_SERVER || 'http://www.react.dev'));
}

module.exports = config;
