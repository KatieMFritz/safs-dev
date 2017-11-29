// Import webpackConfig from root webpack setup
var appConfig = require('../webpack.config.js')
var merge = require('webpack-merge')

// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  var config = genDefaultConfig(baseConfig, env)

  // Extend default config
  config = merge(config, {
    // Use resolve settings
    resolve: appConfig.resolve,
    // Use rules settings
    module: {
      // HACK: Had to remove this for now to get MSU's CSS working
      // rules: appConfig.module.rules.filter(rule => {
      //   return (rule.use && rule.use[0] === 'vue-style-loader'
      // })
    }
  })

  // throw new Error(JSON.stringify(appConfig, null, 2))
  return config
}
