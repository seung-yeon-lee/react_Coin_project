//  공간만드는 Component
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from './withStyles';
import { unit } from './Theme';

export const propTypes = {
  top: PropTypes.number,
  right: PropTypes.number,
  left: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

class Spacing extends PureComponent {
  render() {
    const { children, top, left, right, bottom, vertical, horizontal } = this.props;
    // Spacing 컴포넌트에 간격을 설정하는 props, 또는 상하,좌우 간격을 동일하게 설정하는 horizontal, vertical props를 밑 변수에 저장
    const computedTop = top ? top : vertical;
    const computedBottom = bottom ? bottom : vertical;
    const computedLeft = left ? left : horizontal;
    const computedRight = right ? right : horizontal;

    const computedStyles = {
      flex: 1, // flex 값 지정 시 하위 요소가 동일한 비율로
      ...(computedTop && { marginTop: computedTop * unit }), //ComputedTop에 값이 있다면 computedStyle 객체에 저장
      ...(computedBottom && { marginBottom: computedBottom * unit }),
      ...(computedLeft && { marginLeft: computedLeft * unit }),
      ...(computedRight && { marginRight: computedRight * unit }),
    };
    return <div {...css(computedStyles)}>{children}</div>;
  }
}

export default Spacing;
