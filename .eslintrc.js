module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // ===
    // Vue Rules
    // https://github.com/vuejs/eslint-plugin-vue
    // ===
    'vue/no-multi-spaces': 'error',
    'vue/require-prop-types': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/require-render-return': 'error',
    'vue/no-template-key': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/v-bind-style': ['error', 'shortform'],
    'vue/v-on-style': ['error', 'shortform'],
    'vue/this-in-template': ['error', 'never'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: false
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      [{
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }]
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'always',
          void: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'functional',
          'delimiters',
          'inheritAttrs',
          'comments',
          'parent',
          'extends',
          'mixins',
          'components',
          'directives',
          'filters',
          'model',
          'props',
          'propsData',
          'data',
          'computed',
          'LIFECYCLE_HOOKS',
          'watch',
          'methods',
          'template',
          'render',
          'renderError'
        ]
      }
    ]
  }
}
