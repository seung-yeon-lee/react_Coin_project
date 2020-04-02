import React from 'react';
import { storiesOf } from '@storybook/react';

import BUTTON from '../components/4.Design/Button';
import TEXT from '../components/4.Design/Text';
import WithLoading from '../components/02.Hoc/withLoading';

const TextWithLoading = WithLoading('넘길 인자값')(TEXT);
//이중 커링 구조의 하이어오더 컴포넌트를 사용할 떄 로딩 상태를 표시하는 메시지를 인자로 전달하여 실행
const ButtonWithLoading = WithLoading(<BUTTON disabled>...loading</BUTTON>)(BUTTON);
// 로딩 상태 메세지를 버튼 형태의 JSX로 출력하도록 노드 전달

storiesOf('WithLoading', module).addWithJSX('isLoading예제', () => (
  <div>
    <ButtonWithLoading isLoading>Hello</ButtonWithLoading>
    <TextWithLoading isLoading>Hellow</TextWithLoading>
  </div>
));
