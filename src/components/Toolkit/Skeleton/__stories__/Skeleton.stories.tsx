import type { Story, Meta } from '@storybook/react/types-6-0';

import { Skeleton } from '../Skeleton';

export default {
  title: 'Toolkit/Skeleton',
  component: Skeleton,
} as Meta;

export const SkeletonDefault: Story = Skeleton.bind({});
