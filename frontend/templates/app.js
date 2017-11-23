import Vue from 'vue'

import '../scss/global.scss'
import './components'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  delimiters: ['${', '}']
})
