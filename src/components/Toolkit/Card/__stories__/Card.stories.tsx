import type { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from '../Card';
import type { ICard } from '../Card';

export default {
  title: 'Toolkit/Card',
  component: Card,
} as Meta;

export const CardDefault: Story<ICard> = Card.bind({});

CardDefault.args = {
  imageUrl: require(`images/dp_home.jpg`),
  imageAlt: 'card ',
  heading: 'Day Programme',
  subheading: 'Click here to find out about our Day Programme',
};
