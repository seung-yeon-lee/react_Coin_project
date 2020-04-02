import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './WithStyles';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef = c => {
    this.ref = c;
  };

  handleClick = e => {
    const { onChange } = this.props;
    onChange('Clicked!!', e.target.checked);
  };
  render() {
    const { errorMessage, label, children, styles, checked } = this.props;
    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox"
            checked={checked && 'checked'}
            onClick={this.handleClick}
          />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defulatProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.gray,
  },
}))(CheckBox);
