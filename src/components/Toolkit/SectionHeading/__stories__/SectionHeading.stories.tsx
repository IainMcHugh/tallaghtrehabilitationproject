import type { Story, Meta } from '@storybook/react/types-6-0';

import { SectionHeading } from '../SectionHeading';
import type { ISectionHeading } from '../SectionHeading';

export default {
  title: 'Toolkit/SectionHeading',
  component: SectionHeading,
} as Meta;

export const SectionHeadingDefault: Story<ISectionHeading> =
  SectionHeading.bind({});

SectionHeadingDefault.args = {
  children: 'Summary',
};
