<template slot-scope="props">
  <main>
    <h2>{{ title }}</h2>
    <MByline
      :author="author"
      :date="date"
    />
    <AIntroText>
      <p slot="content">{{ intro }}</p>
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
  props: {
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
