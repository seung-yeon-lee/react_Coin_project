import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './WithStyles'; //css()함수 import

class Text extends PureComponent {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      //   css()함수는 값을 객체형으로 return, 전개연산자를 사용해서 스타일적용
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall, // && xsmall이 true 라면 xsmall의 스타일을 추가
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          primary && styles.primary,
          secondary && styles.secodary,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  // 스타일 생성 함수를 호출하여 테마파일에 등록한 값을 withStyles함수에 전달
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xsmall: {
    fontSize: size.xs,
  },
  small: {
    fontSize: size.sm,
  },
  large: {
    fontSize: size.lg,
  },
  xlarge: {
    fontSize: size.xg,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secodary,
  },
}))(Text);

// export default withStyles()(Text);
//Text Component에서  WithStyles()함수 적용
