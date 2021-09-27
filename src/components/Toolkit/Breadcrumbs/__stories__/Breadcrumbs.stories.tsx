import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumbs } from '../Breadcrumbs';
import type { IBreadcrumbs } from '../Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

export const BreadcrumbsDefault: Story<IBreadcrumbs> = Breadcrumbs.bind({});

BreadcrumbsDefault.args = {
  crumbs: [
    { display: 'Home', href: '/' },
    { display: 'Day Programme', href: '/dayprogramme' },
  ],
};
