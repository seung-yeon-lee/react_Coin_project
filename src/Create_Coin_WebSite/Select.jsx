// 자식 프로퍼티로 option 컴포넌트를 출력

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import Option from './Option';
//select 컴포넌트는 대부분 option을 포함하고있으므로, select를 import할떄
//option 컴포넌트를 참조 할 수 있도록 option export
export { Option };

class Select extends PureComponent {
  state = {
    focused: false,
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };
  handleBlur = () => {
    this.setState({ focused: false });
  };
  handleChange = e => {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value); // code, 선택한value
      // console.log(e.target.value);
    }
  };
  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }
  setRef = ref => {
    this.ref = ref;
  };
  render() {
    const {
      children,
      disabled,
      errorMessage,
      label,
      value,
      name,
      styles,
      large,
      xlarge,
      small,
      xsmall,
    } = this.props;
    const { focused } = this.state;
    return (
      <fieldset {...css(styles.wrapper)}>
        <label
          htmlFor={`input_${name}`}
          {...css(styles.label, errorMessage && styles.errorMessage)}
        >
          {errorMessage || label}
        </label>
        <div
          {...css(
            styles.placeholder,
            xsmall && styles.xsmallPadding,
            small && styles.smallPadding,
            large && styles.largePadding,
            xlarge && styles.xlargePadding,
            focused && styles.focus,
            errorMessage && styles.error,
          )}
        >
          <select
            {...css(
              styles.select,
              xsmall && styles.xsmall,
              small && styles.small,
              large && styles.large,
              xlarge && styles.xlarge,
            )}
            disabled={disabled}
            id={`input_${name}`}
            ref={this.setRef}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={value}
          >
            {React.Children.map(children, child => React.cloneElement(child, { disabled }))}
          </select>
        </div>
      </fieldset>
    );
  }
}
Select.propTypes = {
  ...withStylesPropTypes,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

export default withStyles(({ depth, unit, color, size, lineHeight }) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: 'pointer',
  },
  placeholder: {
    marginTop: 2,
    border: 1,
    borderColor: color.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: unit * 1.5,
  },
  focus: {
    boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)',
  },
  xlargePadding: {
    padding: unit * 2,
  },
  largePadding: {
    padding: unit * 2,
  },
  smallPadding: {
    padding: unit - 1,
  },
  select: {
    fontSize: size.md,
    lineHeight: lineHeight.md,
    backgroundColor: color.white,
    border: 0,
    outline: 0,
    width: '100%',
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  errorLabel: {
    color: color.error,
  },
  error: {
    borderColor: color.error,
  },
}))(Select);
