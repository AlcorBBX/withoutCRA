import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

import AboutPage from './AboutPage'

export default {
  title: 'pages/AboutPage',
  component: AboutPage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => (
  <AboutPage {...(args as object)} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
