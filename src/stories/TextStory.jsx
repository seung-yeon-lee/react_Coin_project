import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../components/4.Design/Text';

storiesOf('Text', module)
  .addWithJSX('기본설정', () => <Text children="Hello,React!" />)
  .addWithJSX('xsmall', () => <Text xsmall>xSmall!</Text>)
  .addWithJSX('small', () => <Text small>small!</Text>)
  .addWithJSX('large', () => <Text large>Large!</Text>)
  .addWithJSX('xLarge', () => <Text xlarge>Xlarge!</Text>)
  .addWithJSX('secondary', () => <Text>Secondary!</Text>)
  .addWithJSX('large + primary', () => (
    <Text primary large>
      large + primary
    </Text>
  ));
