import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import { CreditCard, Phone } from 'react-feather';

import { Button } from '../Button';
import type { IButton } from '../Button';

export default {
  title: 'Toolkit/Button',
  component: Button,
} as Meta;

export const PrimaryButtonDefault: Story<IButton> = Button.bind({});

PrimaryButtonDefault.args = {
  children: 'Donate',
  icon: <CreditCard />,
  variant: 'PRIMARY',
};

export const SecondaryButtonDefault: Story<IButton> = Button.bind({});

SecondaryButtonDefault.args = {
  children: 'Call Us',
  icon: <Phone />,
  variant: 'SECONDARY',
};
