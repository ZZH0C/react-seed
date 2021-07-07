import { HeaderUser } from './HeaderUser';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/HeaderUser',
  component: HeaderUser,
} as ComponentMeta<typeof HeaderUser>;

const Template: ComponentStory<typeof HeaderUser> = () => <HeaderUser />;

export const Primary = Template.bind({});
