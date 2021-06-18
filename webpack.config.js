const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'dist', 'cjs', 'fallback', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'isoRandom',
    umdNamedDefine: true,
    globalObject: 'this',
  },
};
