import React from 'react';
import { storiesOf } from '@storybook/react';

import INPUT from '../components/4.Design/InputWithStyle';
import WithError from '../components/02.Hoc/withError';

const InputWithError = WithError('올바르지 못한 값입니다')(INPUT);

storiesOf('WithError', module)
  .addWithJSX('기본예제', () => <InputWithError name="name" hasError />)
  .addWithJSX('ErrorMessage예제', () => (
    <InputWithError name="name" hasError errorMessage="필수 항목 입니다" />
  ));
