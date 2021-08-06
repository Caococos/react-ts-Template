const path = require('path')

const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'views': resolve('src/views'),
      'components': resolve('src/components'),
    }
  }
}