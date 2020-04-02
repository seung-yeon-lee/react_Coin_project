import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageWithTwoProvider from '../components/03.Context/1.중복 공급자/HomePageWithTwoProvider';
storiesOf('HomePageComponent', module).addWithJSX('Provider 예제', () => (
  <HomePageWithTwoProvider />
));
