import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from '../Text/Text';

import { Card } from './Card';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeOldDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" description="text text" />,
};
