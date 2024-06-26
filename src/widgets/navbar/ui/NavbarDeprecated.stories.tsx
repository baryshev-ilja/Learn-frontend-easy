import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeOldDecorator(ThemeStory.LIGHT), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];
