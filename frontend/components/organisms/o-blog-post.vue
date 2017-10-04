<template>
  <main>
    <h2>{{ title }}</h2>
    <m-byline :date="date" :author="author"/>
    <a-intro-text>
      <p slot="content">This is the intro to this blog post.</p>
    </a-intro-text>
    <slot/>
  </main>
</template>

<script>
import IntroText from '../atoms/a-intro-text.vue'
import Byline from '../molecules/m-byline.vue'


export default {
  components: {
    IntroText: 'a-intro-text',
    Byline: 'm-byline'
  },
  data () {
    return {
      title: 'Blog post title',
      date: 'today',
      author: 'Katie Fritz'
    }
  }
}
</script>

<style lang="scss">
  @import '~@variables';

</style>
