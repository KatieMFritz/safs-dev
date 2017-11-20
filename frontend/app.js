import Vue from 'vue'

import './scss/global.scss'
import './templates/components'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  delimiters: ['${', '}']
})
