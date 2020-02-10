// Dit stuk code heb ik van Giovanni gekregen

const path = require('path');
module.exports = {
    mode: 'development',
    entry: './docs/js/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map'
  };