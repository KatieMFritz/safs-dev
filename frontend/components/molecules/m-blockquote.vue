<template>
<div
  class="row blockquote"
  :class="{ 'blockquote--sans-photo': !photoSrc }"
>
  <div class="large-9 columns large-centered">
    <blockquote>
      <div
        v-if="photoSrc"
        class="blockquote__photo"
        v-bind:style="{ backgroundImage: 'url(' + photoSrc + ')' }"
        :alt="photoAlt"
      >
      </div>
      <div class="blockquote__text">
        <h3>{{ quoteText }}</h3>
      </div>
      <footer v-if="footerText">
        {{ footerText }}
      </footer>
    </blockquote>
  </div>
</div>
</template>

<script>
export default {
  props: {
    quoteText: {
      type: String,
      required: true
    },
    footerText: {
      type: String,
      required: false
    },
    photoSrc: {
      type: String,
      required: false
    },
    photoAlt: {
      type: String,
      required: false
    }
  }
}
</script>
