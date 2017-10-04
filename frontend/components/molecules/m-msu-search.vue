<template>
  <form
    class="m-form--search"
    id="globalsearch-form"
  >
    <input
      type="hidden"
      name="client"
      :value="siteName"
    />
    <input
      type="hidden"
      name="sitesearch"
      :value="siteUrl"
    >

    <label
      class="u-sr-only"
      for="globalsearch"
    >
      Search MSU
    </label>

    <input
      class="m-form--search__input"
      type="text"
      accesskey="4"
      id="globalsearch"
      name="q"
      placeholder="Search"
    >

    <button
      class="m-form--search__button"
      type="submit"
      aria-label="Search"
    >
      <span class="icon-search"></span>
    </button>

  </form>
</template>

<script>
export default {
  props: {
    siteName: {
      type: String,
      default: 'Sustainable Agriculture & Food Systems'
    },
    siteUrl: {
      type: String,
      default: 'localhost'
    }
  }
}
</script>

<style lang="scss">
  @import '~@variables';

  /* MSU Search Tool
  * @http://cabs.msu.edu/web/msu-web-standards.html#s4
  */

  .m-form--search {
    border: 1px solid #666;
    border-radius: $border-radius;
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    max-width: 319px;
    max-height: 30px;
  }

  input[type="text"].m-form--search__input {
    border: none;
    line-height: 1;
    margin: 0;
    padding: $space-inset-squish-s;
    width: 100%;
    &:focus {
      @include no-focus;
    }
  }

  .m-form--search__button {
    background: transparent;
    border: none;
    border-radius: $border-radius;
    flex-shrink: 0;
    .icon-search {
      color: #666;
    }
    &:focus {
      @include no-focus;
    }
  }

  /* Uses focus.js to apply styles to the whole form when the input is focused. This doesn't work for IE9 and below, or when JS is disallowed. */
  .no-js, .lt-ie10 {
    input[type="text"].m-form--search__input:focus {
      @include focus;
    }
  }


</style>
