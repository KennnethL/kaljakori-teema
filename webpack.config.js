const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/kaljakori.js',
  target: 'web',
  output: {
    filename: 'kaljakori.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  externals: {
    'jquery': 'jQuery'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: path.resolve(__dirname, 'assets/js/'),
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        }
      })
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    })
  ]
};
