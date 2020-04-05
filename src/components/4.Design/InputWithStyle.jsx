import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputWithStyle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handelChange = (e) => {
    const { onChange, name } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
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
  setRef = (ref) => {
    this.ref = ref;
  };
  render() {
    const { errorMessage, label, name, value, type, disabled } = this.props;
    return (
      <div className="input-field">
        {' '}
        {/* material css 항목 스타일 추가 */}
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`} //안내문구 색상변경 오류가있을 경우 invalid 클래스 추가
          ref={this.setRef}
          type={type}
          onChange={this.handelChange}
          value={value}
        />
        <label className="active" htmlFor={`input_${name}`}>
          {/* Label 이름 클릭 시 마우스 커서가 입력 항목으로 이동하도록 htmlFor 적용 */}
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

InputWithStyle.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  //   onFocus: PropTypes.func,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

InputWithStyle.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};

export default InputWithStyle;
