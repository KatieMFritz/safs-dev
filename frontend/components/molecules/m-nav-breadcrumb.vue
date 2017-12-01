<template>
  <div class="row" id="breadcrumbs">
    <div class="large-12 columns">
      <nav aria-label="Breadcrumb menu">
        <ul>
          <li>
            <a :href="siteUrl">
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
    </div>
  </div>
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
          blog: { slug: 'javascript:void(0)', title: 'Blog' },
          thisPost: { slug: 'javascript:void(0)', title: 'An exciting blog post' }
        }
      }
    }
  }
}
</script>
