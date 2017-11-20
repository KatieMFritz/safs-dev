<template>
  <section
    v-if="$slots.content"
    class="a-intro"
  >
    <slot name="content"/>
  </section>
</template>

<style lang="scss">
  @import '~@variables';

  .a-intro {
    color: $color-orange-contrast;
    font-size: $font-size-l;
    margin: $space-stack-l;
  }
</style>
