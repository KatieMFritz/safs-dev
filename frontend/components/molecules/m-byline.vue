<template>
  <p class="m-byline">Published {{ date }} by {{ author }}</p>
</template>

<script>
export default {
 data () {
    return {
      date: 'Oct. 4, 2017',
      author: 'Julie Cotton'
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


