import React from 'react';
import { storiesOf } from '@storybook/react';

import BUTTON from '../components/4.Design/Button';
import TEXT from '../components/4.Design/Text';
import WithHoc from '../components/02.Hoc/withHoc';

const ButtonWithHoc = WithHoc(BUTTON);
const TextWithHoc = WithHoc(TEXT);

storiesOf('WithHoc', module)
  .addWithJSX('기본설정', () => (
    <div>
      <ButtonWithHoc>Hello!</ButtonWithHoc>
      <TextWithHoc>하이오더 컴포넌트</TextWithHoc>
    </div>
  ))
  .addWithJSX('large예제', () => (
    <div>
      <ButtonWithHoc large>Large!</ButtonWithHoc>
      <TextWithHoc small>Small</TextWithHoc>
    </div>
  ));
