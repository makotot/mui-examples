import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Blog } from './Blog'

const Meta: ComponentMeta<typeof Blog> = {
  title: 'Blog',
  component: Blog,
  argTypes: {},
}

export default Meta

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />

export const Default = Template.bind({})
Default.args = {}
