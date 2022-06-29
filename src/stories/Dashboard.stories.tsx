import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Dashboard } from './Dashboard'

const Meta: ComponentMeta<typeof Dashboard> = {
  title: 'Dashboard',
  component: Dashboard,
  argTypes: {},
}

export default Meta

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard {...args} />
)

export const Default = Template.bind({})
Default.args = {}
