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
  .example('Date and Author', {
    template: `
      <m-byline
        date="today"
        author="Julie Cotton"
      >
      </m-byline>
    `
  })
  .example('Only Date', {
    template: `
      <m-byline
        date="December 1, 2017"
      >
      </m-byline>
    `
  })
  .example('Only Author', {
    template: `
      <m-byline
        author="Julie"
      >
      </m-byline>
    `
  })
  .example('No Data', {
    template: `
      <m-byline>
      </m-byline>
    `
  })

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
        author="Katie Fritz"
        date="December 1, 2017"
        intro="A long time ago, in a galaxy far, far away..."
        title="My awesome blog post"
      >
        <p>This is the blog post content. Isn't it interesting?</p>
        <p>It has multiple paragraphs.</p>
      </o-blog-post>
    `
  })

new Demo('templates')
  .example('Blog Post', {
    template: `
      <body>
        <o-header></o-header>
        <o-blog-post>
      </body>
    `
  })
