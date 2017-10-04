import Demo from '../.storybook/demo'

new Demo('a-label')
.example('Default')
.example('With content', {
  template: `
    <a-label>
      This is a label
    </a-label>
  `
})

new Demo('a-msu-masthead')
.example('Default')

new Demo('a-msu-wordmark')
.example('Default')

new Demo('m-byline')
.example('Default')

new Demo('m-blockquote')
.example('Sample', {
  template: `
    <m-blockquote>
      <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.</p>

      <template slot="source">
        Katie Fritz, Web Developer at <a href=\"https://katiemfritz.com\">Katie M Fritz, LLC</a>
      </template>
    </m-blockquote>
    `
})
