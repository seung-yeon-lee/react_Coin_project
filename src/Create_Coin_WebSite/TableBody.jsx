// TableHead Component와 유사한 방법으로 자삭 프로퍼티를 사용, baseLine 프로퍼티를
// 이용하여 자식 배열 중 마지막을 제외한 행은 밑줄을 표시하도록 만듬
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);
    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseline = index < length - 1 ? true : false;
          return React.cloneElement(child, { baseline });
        })}
      </tbody>
      //마지막줄을 생략, 미관상 테두리 줄이 겹치지 않게 하기 위함.
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
