// module.exports = {
//   devServer: {
//     proxy: {
//       ajax: {
//         target: '',
//         changeOrigin: true
//       }
//     }
//   }

// }
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maizuo.com/',
        changeOrigin: true,
        pathRewrite: { '^/ajax': '' }
      }

    }
  }
}
