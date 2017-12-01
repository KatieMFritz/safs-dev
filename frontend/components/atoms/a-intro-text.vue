<template>
  <section
    v-if="$slots.content"
    class="row intro"
  >
    <div class="large-9 columns large-centered text-center">
      <h2 v-if="$slots.heading">
        <slot name="heading"/>
      </h2>
      <slot name="content"/>
    </div>
  </section>
</template>
