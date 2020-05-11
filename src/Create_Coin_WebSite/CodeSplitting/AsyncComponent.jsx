// 지연 로딩으로 코드 스플릿팅 기법 구현, 웹팩은 특정파일을 분리하여 구성, 호출될 떄 지연 로딩을 할 수 있도록 import() 함수를 제공

import React, { PureComponent } from 'react';
import Text from '../Text';

export default class AsyncComponent extends PureComponent {
  componentDidMount() {
    const { loader } = this.props;

    loader().then(({ default: Component }) => {
      this.Component = Component;
      this.forceUpdate();
    });
  }
  render() {
    const { loader, ...otherProps } = this.props;
    const Component = this.Component;

    return Component ? (
      <Component {...otherProps} />
    ) : (
      <Text secondary large>
        {' '}
        ...Loading
      </Text>
    );
  }
}

//AsyncMainPage  작성 =>
// https://coin-58610.firebaseapp.com  firebase deploy URL
