<template>
  <div id="desktop-nav">
    <div class="row">
      <div class="large-12 columns" id="main-menu-wrapper">
        <nav id="main-menu" aria-label="Primary navigation">
          <ul>
            <li>
              <a
                :href="siteUrl"
                aria-label="Home"
                style="background:url(../../images/safs/icons/ico-home-white.svg) no-repeat 0 1px"
              >
                <span class="show-for-sr">Home</span>
              </a>
            </li>
            <li
              v-for="item in links"
              :key="item.title"
            >
              <a :href="item.slug">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div><!-- /#main-menu-wrapper -->
    </div><!-- /.row -->
  </div><!-- /#desktop-nav -->
</template>

<script>
export default {
  props: {
    siteUrl: {
      type: String,
      default: 'javascript:void(0)'
    },
    links: {
      type: Object,
      default () {
        return {
          about: { slug: 'javascript:void(0)', title: 'About' },
          resources: { slug: 'javascript:void(0)', title: 'Resources' },
          reqs: { slug: 'javascript:void(0)', title: 'Minor Requirements' },
          blog: { slug: 'javascript:void(0)', title: 'Blog' },
          contact: { slug: 'javascript:void(0)', title: 'Contact' }
        }
      }
    }
  }
}
</script>
