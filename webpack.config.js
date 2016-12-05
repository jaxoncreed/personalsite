
module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  entry: {
    bundle: ['./clientSrc/index']
  },
  output: {
    path: __dirname + '/clientBuild',
    filename: "bundle.js"
  }
};
