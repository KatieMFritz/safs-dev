import { configure } from '@storybook/vue'
import '../frontend/scss/global.scss'

function loadStories() {
  require('.')
}

configure(loadStories, module)
