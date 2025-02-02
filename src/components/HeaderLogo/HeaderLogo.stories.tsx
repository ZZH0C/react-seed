import { HeaderLogo } from './HeaderLogo';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/HeaderLogo',
  component: HeaderLogo,
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = () => <HeaderLogo />;

export const Primary = Template.bind({});
