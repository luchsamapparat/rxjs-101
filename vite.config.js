const { resolve } = require('path')
const { readdirSync } = require('fs');
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: readdirSync(__dirname)
        .filter(filename => filename.endsWith('.html'))
        .map(filename => resolve(__dirname, filename))
    }
  }
})