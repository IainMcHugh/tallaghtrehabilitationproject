import type { Story, Meta } from '@storybook/react/types-6-0';

import { Link } from '../Link';
import type { ILink } from '../Link';

export default {
  title: 'Toolkit/Link',
  component: Link,
} as Meta;

export const LinkDefault: Story<ILink> = Link.bind({});

LinkDefault.args = {
  children: 'Donate',
};
