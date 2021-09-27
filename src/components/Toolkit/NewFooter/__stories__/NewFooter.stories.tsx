import type { Story, Meta } from '@storybook/react/types-6-0';

import { NewFooter } from '../NewFooter';

export default {
  title: 'Toolkit/Footer',
  component: NewFooter,
} as Meta;

export const NewFooterDefault: Story = NewFooter.bind({});

NewFooterDefault.args = {};
