import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from 'react-with-styles';

class Button extends PureComponent {
  render() {
    const { children, disabled, onPress, small, large, primary, styles } = this.props;
    return (
      <button
        {...css(
          styles.default,
          small && styles.small,
          large && styles.large,
          primary && styles.primary,
        )}
        onClick={onPress}
      >
        {children}
      </button>
    );
  }
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  small: PropTypes.bool,
  large: PropTypes.bool,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  small: false,
  large: false,
  primary: false,
};

export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      //미디어 스타일값 responseive.small을 키로 사용하여 추가 스타일 항목을 하위 객체로 할당
      width: '100%',
    },
  },
  large: {
    fontSize: size.xg,
    border: 3,
    borderBottom: 2,
    borderRadius: 10,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  primary: {
    color: color.gray,
    borderColor: color.secondary,
    backgroundColor: color.primary,
  },
}))(Button);
