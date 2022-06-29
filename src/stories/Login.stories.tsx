import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Login } from './Login'

const Meta: ComponentMeta<typeof Login> = {
  title: 'Login',
  component: Login,
  argTypes: {},
}

export default Meta

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const Default = Template.bind({})
Default.args = {}
