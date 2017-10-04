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

new Demo('a-intro-text')
.example('Sample', {
  template: `
    <a-intro-text>
      <template slot="content">
        <p>The intro text may be a lead-in to the passage of text, or it may just be used to create a visual distinction between the rest of the passage of text.</p>
      </template>
    </a-intro-text>
  `
})

new Demo('a-msu-masthead')
.example('Default')

new Demo('a-msu-wordmark')
.example('Default')

new Demo('m-byline')
.example('Default')

new Demo('m-blockquote')
.example('Default')
.example('Sample', {
  template: `
    <m-blockquote>
      <p>Here is some different blockquote text.</p>

      <template slot="source">
        Anonymous
      </template>
    </m-blockquote>
    `
})

new Demo('m-msu-search')
.example('Default')

new Demo('m-nav-primary')
.example('Default')

new Demo('o-header')
.example('Default')

new Demo('o-blog-post')
.example('Sample', {
  template: `
    <o-blog-post
      title="My awesome blog post"
    >
      <p>This is the blog post content. Isn't it interesting?</p>
      <p>It has multiple paragraphs.</p>
      <m-blockquote/>
    </o-blog-post>
  `
})

new Demo('templates')
.example('Blog Post', {
  template: `
    <body>
      <o-header/>
      <o-blog-post/>
    </body>
  `
})
