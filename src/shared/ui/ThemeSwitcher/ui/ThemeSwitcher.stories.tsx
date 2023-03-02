import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
