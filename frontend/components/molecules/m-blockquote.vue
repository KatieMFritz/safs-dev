<template>
  <blockquote class="m-blockquote">
    <slot>
      <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.</p>
    </slot>
    <footer
      v-if="$slots.source"
      class="m-blockquote__footer"
    >
      <cite class="m-blockquote__cite">
        <slot name="source">
          Katie Fritz, Web Developer at <a href="https://katiemfritz.com">Katie M Fritz, LLC</a>
        </slot>
      </cite>
    </footer>
  </blockquote>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

// <style lang="scss">
//   @import '~@variables';
//   .m-blockquote {
//     background: $color-gray-light;
//     font-size: $font-size-l;
//     padding: $space-inset-l;
//     quotes: "\201C""\201D""\2018""\2019";
//     &:before {
//       content: open-quote;
//       font-size: $font-size-base * 4;
//       line-height: 0.1em;
//       margin-right: 0.25em;
//       vertical-align: -0.4em;
//     }
//     p {
//       display: inline;
//     }
//   }
//   .m-blockquote__footer {
//     padding-top: $space-m;
//     text-align: right;
//   }

//   .m-blockquote__cite {
//     font-size: $font-size-base;
//     &:before {
//       content: '\2014 \A0';
//     }
//   }

//   @media (max-width: 30rem) {
//     .m-blockquote {
//       font-size: $font-size-base;
//       padding: $space-inset-m;
//     }
//     .m-blockquote__cite {
//       font-size: $font-size-s;
//     }
//   }
// </style>
