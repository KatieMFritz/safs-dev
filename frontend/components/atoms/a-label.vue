<template>
  <a
    :href="link"
    class="tiny button"
  >
    {{ labelText }}
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false,
      default: 'javascript:void(0)'
    },
    labelText: {
      type: String,
      required: true
    }
  }
}
</script>
