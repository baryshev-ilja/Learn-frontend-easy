import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button/Button';
import { DropDown } from './DropDown';

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150, display: 'flex', justifyContent: 'flex-start' }}><Story /></div>,
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