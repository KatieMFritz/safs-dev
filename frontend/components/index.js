import Vue from 'vue'

const requireComponent = require.context('.', true, /\.(vue|js)$/)
requireComponent.keys().forEach(relativePath => {
  if (/index\.js$/.test(relativePath)) return

  const componentConfig = requireComponent(relativePath)
  const componentName = relativePath
    .replace(/^.+\//, '')
    .replace(/\.\w+$/, '')

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
