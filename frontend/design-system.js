import Demo from '../.storybook/demo'

new Demo('a-label')
  .example('Short Label', {
    template: `
      <a-label
        labelText="Latest"
      >
      </a-label>
    `
  })
  .example('Medium Label', {
    template: `
      <a-label
        labelText="Alumni Spotlight"
      >
      </a-label>
    `
  })
  .example('Long Label', {
    template: `
      <a-label
        labelText="Double Up Food Bucks"
      >
      </a-label>
    `
  })

new Demo('a-intro-text')
  .example('With heading', {
    template: `
      <a-intro-text>
        <template slot="heading">This is a heading.</template>
        <template slot="content">
          <p>The intro text may be a lead-in to the passage of text, or it may just be used to create a visual distinction between the rest of the passage of text.</p>
        </template>
      </a-intro-text>
    `
  })
  .example('No heading', {
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

new Demo('a-msu-search')
  .example('Default')

new Demo('a-msu-wordmark')
  .example('Default')

new Demo('a-site-title')
  .example('SAFS', {
    template: `
      <header>
        <a-site-title
          siteName="Sustainable Agriculture and Food Systems"
        >
        </a-site-title>
      </header>
    `
  })
  .example('Two lines', {
    template: `
    <header>
      <a-site-title
        siteName="Michigan State University"
        siteNameLine2="Sustainable Agriculture and Food Systems"
      >
      </a-site-title>
    </header>
    `
  })
  .example('Three lines', {
    template: `
    <header>
      <a-site-title
          siteName="Michigan State University"
          siteNameLine2="Sustainable Agriculture and Food Systems"
          siteNameLine3="Random Third Line"
        >
      </a-site-title>
    </header>
    `
  })

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
  .example('No footer', {
    template: `
      <m-blockquote
        quoteText="Blockquote with no photo and no footer"
      >
      </m-blockquote>
      `
  })
  .example('With footer', {
    template: `
      <m-blockquote
        quoteText="Blockquote with no photo and a footer"
        footerText="This is the footer"
      >
      </m-blockquote>
      `
  })
  .example('With photo', {
    template: `
      <m-blockquote
        quote-text="Blockquote with no photo and a footer"
        footer-text="This is the footer"
        photo-src="http://www.safss.msu.edu/uploads/1/1/1/2/11126970/6548446_orig.jpg"
        photo-alt="Describes the photo"
      >
      </m-blockquote>
      `
  })

new Demo('m-nav-desktop')
  .example('Default')

new Demo('m-nav-breadcrumb')
  .example('Default')

new Demo('m-utilities')
  .example('Default')

new Demo('o-template-header')
  .example('Default')

new Demo('o-header')
  .example('SAFS', {
    template: `
      <o-header
        siteName="Sustainable Agriculture and Food Systems"
      >
      </o-header>
    `
  })

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
