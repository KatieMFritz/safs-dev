<template>
  <div class="template__header">
    <div class="template__sticky-header">
      <div class="row">
        <MMsuMastheadLink/>
        <MUtilities/>
      </div><!-- /.row -->
    </div><!-- /.template__sticky-header -->
  </div><!-- /.template__header -->
</template>

<script>
import MMsuMastheadLink from '../molecules/m-msu-masthead-link.vue'
import MUtilities from '../molecules/m-utilities.vue'

export default {
  components: {
    MMsuMastheadLink,
    MUtilities
  }
}
</script>
