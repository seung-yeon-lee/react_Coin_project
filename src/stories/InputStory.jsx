import React from 'react';
import { storiesOf } from '@storybook/react'; // 스토리를 스토리북 도구에 추가해주는 storiesOf 함수 import
import { action } from '@storybook/addon-actions'; //addon-action install 후 addons.js file에서 import => Input파일에 적용하기

import Input from '../components/Input';
import Text from '../components/Text';

storiesOf('Input', module)
  .addWithJSX('기본설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="React" />)
  .addWithJSX('onChange', () => <Input name="name" onChange={action('onChange Event!')} />);

// storiesOf('Text', module).add('버튼', () => <Text />);
// 바로위 Input은 스토리북 도구에 표시할 스토리의 이름, '기본설정'은 표시할 메뉴 이름을 입력
