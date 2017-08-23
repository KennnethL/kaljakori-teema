const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/kaljakori.js',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    filename: 'kaljakori.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  externals: {
    'jquery': 'jQuery'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: path.resolve(__dirname, 'assets/js/')
    }),
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
