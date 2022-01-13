const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '*.html'),
        // pages: resolve(__dirname, 'pages/*.html')
      }
    }
  }
})