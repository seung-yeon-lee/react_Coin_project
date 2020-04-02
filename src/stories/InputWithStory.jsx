import React from 'react';
import { storiesOf } from '@storybook/react';

import Inputs from '../components/4.Design/InputWithStyle';

storiesOf('InputStyle', module)
  .addWithJSX('Basic', () => <Inputs name="Name" />)
  .addWithJSX('label', () => <Inputs name="Name" label="String" />)
  .addWithJSX('Value', () => <Inputs name="Name" value="React" />)
  .addWithJSX('ErrorMesaage', () => (
    <Inputs name="Name" label="Name" errorMessage="이름을 입력하세요" />
  ));
