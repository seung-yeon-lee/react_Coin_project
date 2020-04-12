// isHeader props를 전달, 자식 프로퍼티의 값은 JSX 노드 형태이므로 map()이 아니라
// React.Children.map()를 사용, 이 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를
// 배열처럼 취급, 또한 각각의 자식 컴포넌트(child)에 추가 프로퍼티를 전달,
// React.cloneElement()는 JSX노드를 복사한 다음 특정 프로퍼티를 추가

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <thead>
        {React.Children.map(children, child => React.cloneElement(child, { isHeader: true }))}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;
