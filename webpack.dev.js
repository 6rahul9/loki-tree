const w = require('webpack-merge')
const common = require('./webpack.common.js')
const PORT = process.env.PORT || 3000
const path = require('path')
const buildDir = path.join(__dirname, 'build')

// module.exports = w.merge(common, {
//   mode: 'development',
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: buildDir,
//     compress: true,
//     port: PORT,
//     watchOptions: {
//       poll: true,
//     },
//   },
// })

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from the 'public' directory
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    client: {
      overlay: true, // Show errors in the browser overlay
    },
    watchFiles: {
      paths: ['src/**/*.js', 'public/**/*'], // Watch specific files or directories for changes
      options: {
        usePolling: true, // Adjust this option based on your needs
      },
    },
  },
};
