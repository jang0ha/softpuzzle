const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    // esModule: false, //
    chainWebpack : config => {
        config.plugins.delete('prefetch'); //prefetch 삭제
    },
    lintOnSave: false //eslint 설정 끄는법 이거 삭제하면 다시 실행됨.
})
