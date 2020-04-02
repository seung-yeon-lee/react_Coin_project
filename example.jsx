import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputWithStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    if (this.props.onChange) {
      onchange(e.target.value);
    }
  };

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  componentDidUpdate() {}
  render() {
    const { errorMessage, label, name, value, type, onPress } = this.props;
    return <div className="input-field"></div>;
  }
}

InputWithStyle.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

InputWithStyle.defaultProps = {
  onChange: () => {},
  type: 'text',
};

export default InputWithStyle;
