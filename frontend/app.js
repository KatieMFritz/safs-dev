import './app.scss'
import Vue from 'vue'

const requireComponents = require.context('./components', false, /\.(vue|js)$/)
requireComponents.keys().forEach(fileName => {
  const componentName = fileName
    .replace(/^\.[/\\]/, '')
    .replace(/\.\w+$/, '')
  const componentConfig = requireComponents(fileName).default
  Vue.component(componentName, componentConfig)
})

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    message: 'Hello Vue!'
  }
})
