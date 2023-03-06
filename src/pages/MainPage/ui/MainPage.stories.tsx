import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

import MainPage from './MainPage'

export default {
  title: 'pages/MainPage',
  component: MainPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => (
  <MainPage {...(args as object)} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
