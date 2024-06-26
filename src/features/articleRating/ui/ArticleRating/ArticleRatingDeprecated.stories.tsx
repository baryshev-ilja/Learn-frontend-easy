import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ArticleRating from './ArticleRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeOldDecorator(ThemeStory.LIGHT), StoreDecorator({})],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
