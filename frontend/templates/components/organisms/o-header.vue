<template>
  <header class="o-header">
    <section class="o-header__msu">
      <MMsuMastheadLink/>
      <MMsuSearch/>
    </section>
    <h1 class="o-header__site-name">{{ siteName }}</h1>
    <MNavPrimary/>
  </header>
</template>

<script>
import MMsuMastheadLink from '../molecules/m-msu-masthead-link.vue'
import MMsuSearch from '../molecules/m-msu-search.vue'
import MNavPrimary from '../molecules/m-nav-primary.vue'

export default {
  comonents: {
    MMsuMastheadLink,
    MMsuSearch,
    MNavPrimary
  },
  data () {
    return {
      siteName: 'Sustainable Agriculture & Food Systems'
    }
  }
}
</script>

<style lang="scss">

  @import '~@variables';
  /* MSU Web Standards: Header
  * @http://cabs.msu.edu/web/msu-web-standards.html#s3
  */
  .o-header {
    margin: $space-stack-l;
  }

  .o-header__msu {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .a-msu-masthead {
      max-width: 300px;
      margin: $space-stack-s;
    }
    .m-form--search {
      margin: $space-stack-s;
    }
  }

  .o-header__site-name {
    background: transparent;
    color: $color-msu-green;
    font-size: $font-size-base * 1.25;
    margin: $space-stack-s;
    @media (min-width: 400px) and (max-width: 999px) {
      font-size: $font-size-base * $phi;
    }
    @media (min-width:1000px) {
      font-size: $font-size-base * power($phi, 2);
      margin: $space-stack-m;
    }
  }
</style>
