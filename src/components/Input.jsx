import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handelChange = e => {
    const { onChange, name } = this.props;
    if (onChange) {
      onChange(e.target.value, name);
    }
  };

  componentDidMount() {
    if (this.props.autoFocus) {
      // autoFocus가 true일 경우에 input 박스에 자동으로 cusor를 배치
      this.ref.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.autoFocus) {
      // autoFocus가 true일 경우에 input 박스에 자동으로 cusor를 배치
      this.ref.focus();
    }
  }
  setRef = ref => {
    this.ref = ref;
  };
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <div>
        <label>
          {label}
          <input
            id={`input_${name}`}
            ref={this.setRef}
            onChange={this.handelChange}
            onFocus={onFocus}
            value={value}
            type={type}
          />
          {errorMessage && <span className="error">{errorMessage}</span>}
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};

export default Input;
