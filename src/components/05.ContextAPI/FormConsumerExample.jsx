//Input Component 와 소비자 연결
import React, { PureComponent } from 'react';
import Input from '../Input';
import { Consumer } from './FormContext';

class FormConsumerExample extends PureComponent {
  render() {
    const { name, ...otherProps } = this.props;
    return (
      <Consumer>
        {({ values, errors, onChange }) => (
          <Input
            {...otherProps}
            name={name}
            onChange={onChange}
            value={values[name]} //입력값중 name props의 키값을 입력값으로
            errorMessage={errors[name]}
          />
        )}
      </Consumer>
    );
  }
}
export default FormConsumerExample;
