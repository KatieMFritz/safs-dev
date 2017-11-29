<template>
  <section
    v-if="$slots.content"
    class="intro"
  >
    <slot name="content"/>
  </section>
</template>
