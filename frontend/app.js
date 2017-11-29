import Vue from 'vue'

import '@assets/msu-branded-framework/css/vendor.min.css'
import '@assets/msu-branded-framework/css/main.min.css'
import './components'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  delimiters: ['${', '}']
})
