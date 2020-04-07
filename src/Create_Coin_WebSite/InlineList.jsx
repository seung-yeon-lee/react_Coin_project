// 가로배치를 위한 component

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from './withStyles';
import { unit } from './Theme';

class InlineList extends PureComponent {
  render() {
    const { align, children, styles, spacingBetween, verticalAlign } = this.props;
    return (
      <div
        {...css(
          styles.wrapper, // withStyles의 wrapper속성으로 가로배치를 위한 속성 적용
          align === 'center' && styles.alignCenter, //align props가 center면 하위요소를 가운데 정렬
          align === 'right' && styles.alignRight,
          verticalAlign === 'top' && styles.verticalAlignTop, // 하위 요소를 위로 정렬
          verticalAlign === 'bottom' && styles.verticalAlignBottom, // 하위 요소 아래 정렬
        )}
      >
        {React.Children.map(children, (
          child, //spacing props 값에 unit을 곱한 만큼 하위 요소 간격 지정
        ) => (
          <div {...css({ marginRight: spacingBetween * unit })}>{child}</div>
        ))}
      </div>
    );
  }
}

InlineList.propTypes = {
  ...withStylesPropTypes,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
  spacingBetween: PropTypes.number,
  children: PropTypes.node,
};
InlineList.defaultProps = {
  spacingBetween: 1,
};
export default withStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // 화면 밖의 하위 요소를 아래로 밀어 배치
    justifyContent: 'flex-start', //하위 요소 왼쪽부터 배치
    alignItems: 'center', // 하위 요소 상하 가운데 정렬
  },
  alignCenter: {
    justifyContent: 'center',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  verticalAlignTop: {
    alignItems: 'flex-start',
  },
  verticalAlignBottom: {
    alignItems: 'flex-end',
  },
}))(InlineList);
