// Route 컴포넌트 적용 중, Switch  컴포넌트 사용, 잘못된 주소가 입력되었을 경우 출력하는 compo 작성

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Text from '../../Text';
import Spacing from '../../Spacing';
import InlineList from '../../InlineList';

class NotFound extends PureComponent {
  render() {
    const { url } = this.props.match || {};
    return (
      <>
        <InlineList align="center">
          <Spacing bottom={2} top={10}>
            <Text large>{url} 페이지를 찾을 수 없습니다.</Text>
          </Spacing>
        </InlineList>
        <Link style={{ display: 'flex', justifyContent: 'center' }} to="/">
          메인페이지로 이동
        </Link>
      </>
    );
  }
}

export default NotFound;
