import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../components/4.Design/CheckBox';
import Text from '../components/4.Design/Text';

storiesOf('CheckBox', module)
  .addWithJSX('기본설정', () => <CheckBox name="Agree" />)
  .addWithJSX('chilren 예제', () => (
    <CheckBox name="Agree">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('label예제', () => (
    <CheckBox name="Agree" label="이름">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('onChange예제', () => (
    <CheckBox name="Agree" label="이름" onChange={action('onChange 이벤트발생')}>
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('autoFocus예제', () => (
    <CheckBox name="Agree" label="이름" autoFocus>
      <Text>동의합니다</Text>
    </CheckBox>
  ))

  .addWithJSX('errorMessage예제', () => (
    <CheckBox name="error" label="이름" errorMessage="동의가 필요합니다">
      <Text>동의합니다</Text>
    </CheckBox>
  ));
