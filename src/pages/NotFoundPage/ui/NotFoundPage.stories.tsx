import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

import { NotFoundPage } from './NotFoundPage'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...(args as object)} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
