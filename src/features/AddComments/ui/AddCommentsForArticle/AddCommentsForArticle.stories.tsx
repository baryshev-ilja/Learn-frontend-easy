import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AddCommentsForArticle from './AddCommentsForArticle';

export default {
    title: 'features/AddCommentsForArticle',
    component: AddCommentsForArticle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentsForArticle>;

const Template: ComponentStory<typeof AddCommentsForArticle> = (args) => <AddCommentsForArticle {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoreDecorator({
    articleComments: {
        isLoading: false,
        ids: ['1'],
        entities: {
            1: {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
        },
    },
})];
