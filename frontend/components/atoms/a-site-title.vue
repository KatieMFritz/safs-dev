<template>
  <div class="row">
    <div id="site-title-wrapper" class="large-9 columns">
      <h1 id="site-title">
        <a href="#">
          {{ siteName }}
          <span v-if="siteNameLine2">{{ siteNameLine2 }}</span>
          <span v-if="siteNameLine3">{{ siteNameLine3 }}</span>
        </a>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    siteName: {
      type: String,
      required: true
    },
    siteNameLine2: {
      type: String,
      required: false
    },
    siteNameLine3: {
      type: String,
      required: false
    }
  }
}
</script>
