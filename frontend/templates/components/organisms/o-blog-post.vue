<template>
  <main>
    <h2>{{ title }}</h2>
    <MByline
      :date="date"
      :author="author"
    />
    <AIntroText>
      <p slot="content">This is the intro to this blog post.</p>
    </AIntroText>
    <slot/>
  </main>
</template>

<script>
import AIntroText from '../atoms/a-intro-text.vue'
import MByline from '../molecules/m-byline.vue'

export default {
  components: {
    AIntroText,
    MByline
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
