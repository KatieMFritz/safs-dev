<template>
  <p class="m-byline">Published {{ date }} <span v-if="author">by {{ author }}</span></p>
</template>

<script>
export default {
  // TODO: support real dates
  props: {
    date: {
      type: String,
      required: true,
      default: 'Oct. 4, 2017'
    },
    author: {
      type: String,
      default: 'Julie Cotton'
    }
  }
}
</script>

<style lang="scss">
  @import '~@variables';

  .m-byline {
    color: $color-text-muted;
    font-size: $font-size-s;
    margin: $space-stack-s;
    padding: 0;
  }
</style>


