// Option Component를 Select Component의 자식컴포넌트로 출력, 선택 항목 구현

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Option extends PureComponent {
  render() {
    const { value, label, disabled } = this.props;
    return (
      <option value={value} disabled={disabled}>
        {label || value}
      </option>
    );
  }
}

Option.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Option;

// HTML의 option 엘리먼트는 문자 형태의 글만 출력,  props로 받는거보다 label을 받아 출력 , label이 없이 사용할 경우 value값으로 글자 출력
