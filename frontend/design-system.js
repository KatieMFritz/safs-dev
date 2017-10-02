import Demo from '../.storybook/demo'

new Demo('test-component')
  .example('Default')
  .example('With content', {
    template: `
      <test-component>
        Hi I have content!
      </test-component>
    `
  })
