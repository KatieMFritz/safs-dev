<template>
  <div class="small-6 columns template__utilities">
    <AHamburger/>
    <AMsuSearch/>
  </div>
</template>

<script>
import AHamburger from '../atoms/a-hamburger.vue'
import AMsuSearch from '../atoms/a-msu-search.vue'

export default {
  components: {
    AHamburger,
    AMsuSearch
  }
}
</script>
