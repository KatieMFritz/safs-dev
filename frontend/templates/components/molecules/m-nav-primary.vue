<template>
  <nav class="m-nav m-nav--primary u-clearfix">
    <div class="u-container">
      <ul class="m-nav__list u-clearfix">
        <li class="m-nav__item">
          <a
            class="m-nav__link"
            :href="siteUrl"
            aria-label="Home">
            <span class="icon-home"/>
          </a>
        </li>

        <li
          v-for="item in links"
          :key="item.title"
          class="m-nav__item"
        >
          <a
            class="m-nav__link"
            :href="item.slug">
            {{ item.title }}
          </a>
        </li>

      </ul>
    </div><!-- /.container -->
  </nav>

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

<style lang="scss">
  @import '~@variables';

  .m-nav__list {
    //background-color: skyblue;
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .m-nav__item {
    display: inline-table;
  }

  /* styles just for primary nav */
  .m-nav--primary {
    background-color: $color-yellow-green-contrast;
    .m-nav__list {
      float: left;
      padding: $space-s 0;
    }
    .m-nav__item {
      float: left;
      padding: $space-inset-squish-m;
      margin: 0;
    }
    .m-nav__link {
      color: $color-white;
      font-weight: 700;
      text-transform: uppercase;
      &:hover, &:focus, &.is-active {
        background-color: $color-msu-green;
        text-decoration: none;
      }
    }
  }

/* TODO: Add mobile nav */

/* TODO: Add dropdowns */

</style>
