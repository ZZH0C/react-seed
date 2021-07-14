import { Head } from './Head';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/Head',
  component: Head,
} as ComponentMeta<typeof Head>;

const Template: ComponentStory<typeof Head> = () => <Head />;

export const Primary = Template.bind({});
