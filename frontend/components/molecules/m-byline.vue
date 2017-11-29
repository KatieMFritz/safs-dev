<template>
  <h4>
    Published
    <span v-if="date"> {{ date }}</span>
    <span v-if="author"> by {{ author }}</span>
  </h4>
</template>

<script>
export default {
  // TODO: support real dates
  props: {
    date: {
      type: String
    },
    author: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  // @import '~@variables';

  // .m-byline {
  //   color: $color-text-muted;
  //   font-size: $font-size-s;
  //   margin: $space-stack-s;
  //   padding: 0;
  // }
</style>
