import Vue from 'vue'

import './app.scss'
import './components'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  delimiters: ['${', '}']
})
