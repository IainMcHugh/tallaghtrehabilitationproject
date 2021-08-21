import type { Story, Meta } from '@storybook/react/types-6-0';

import { NewHeader } from '../NewHeader';

export default {
  title: 'Toolkit/Header',
  component: NewHeader,
} as Meta;

export const HeaderDefault: Story = NewHeader.bind({});

HeaderDefault.args = {};
