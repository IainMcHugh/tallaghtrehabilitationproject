import type { Story, Meta } from '@storybook/react/types-6-0';

import { Carousel } from '../Carousel';
import type { ICarousel } from '../Carousel';

export default {
  title: 'Toolkit/Carousel',
  component: Carousel,
} as Meta;

export const CarouselDefault: Story<ICarousel> = Carousel.bind({});

CarouselDefault.args = {
  items: [
    {
      title: 'Mission Statement',
      body: 'We believe in the advantage of rehabilitation within our community, as addiction can happen in social & emotional isolation, we are here to provide a supportive and nurturing environment where participants are encouraged to work in an open & therapeutic setting on their previous drug/alcohol use.',
    },
    {
      title: 'Values',
      body: 'Tallaght Rehabilitation Project values and respects the rights of all our participants to engage in a recovery process that is positive, honest, and compassionate, dignified and also meets the needs of our clients through progressive pathways and emotional growth.',
    },
    {
      title: 'Commitment and Growth',
      body: 'The Tallaght Rehabilitation Project Organisation is committed to providing quality services for people who are in recovery from drug and alcohol addiction. Our organisation and programmes strive to provide quality based services which are evidence based and promote good corporate governance in order to be a leader in local community based therapeutic rehabilitation.',
    },
  ],
  width: [320, 320, 320],
};
