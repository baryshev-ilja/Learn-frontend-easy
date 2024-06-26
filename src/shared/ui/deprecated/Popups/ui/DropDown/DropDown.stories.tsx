import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../../../Button/Button';

import { DropDown } from './DropDown';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150, display: 'flex', justifyContent: 'flex-start' }}><Story /></div>,
        ThemeOldDecorator(ThemeStory.LIGHT),
    ],
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    direction: 'topRight',
    trigger: <Button>Menu</Button>,
    items: [
        {
            content: 'firstElement',
        },
        {
            content: 'secondElement',
        },
    ],
};
