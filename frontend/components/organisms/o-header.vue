<template>
  <header>
    <OTemplateHeader/>
    <ASiteTitle
      :siteName="siteName"
      :siteNameLine2="siteNameLine2"
      :siteNameLine3="siteNameLine3"
    />
    <MNavDesktop/>
  </header>
</template>

<script>
import OTemplateHeader from '../organisms/o-template-header.vue'
import ASiteTitle from '../atoms/a-site-title.vue'
import MNavDesktop from '../molecules/m-nav-desktop.vue'

export default {
  components: {
    OTemplateHeader,
    ASiteTitle,
    MNavDesktop
  },
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
