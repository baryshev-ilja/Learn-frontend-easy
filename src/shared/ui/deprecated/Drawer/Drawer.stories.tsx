import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Drawer } from './Drawer';

// eslint-disable-next-line
import { NotificationItem } from '@/entities/notification/ui/NotificationItem/NotificationItem';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: (
        <NotificationItem item={{ title: 'Уведомление 1', id: '1', description: 'Оплатите подписку на блог' }} />
    ),
};
Normal.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: (
        <NotificationItem item={{ title: 'Уведомление 1', id: '1', description: 'Оплатите подписку на блог' }} />
    ),
};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
