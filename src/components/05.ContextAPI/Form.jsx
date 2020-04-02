// Form 공급자 , 유효성 검사를 props로 전달 받음, 입력값이 올바르지 않다면 error Message 출력
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './FormContext';

export default class FormProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}, //입력된 값을 모두 저장하는 Obj
      errors: {}, //오류 메시지를 입력 항목 이름과 함께 저장한 객체
    };
  }
  onChange = (name, updatedValue) => {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
      }),
      () => this.validate(this.state.values),
    );
  };
  reset = () => {
    this.setState({ values: {}, errors: {} });
  };
  submit = () => {
    this.props.onSubmit(this.state.values); //소비자에서 submit 호출 시 , Onsubmit 프로퍼티로 전달 받은 콜백 함수에 현재 값을 인자로 전달
  };
  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = validate(values);
    this.setState({ errors });
  }
  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{ errors, values, onChange: this.onChange, reset: this.reset, submit: this.submit }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
FormProvider.PropTypes = {
  validate: PropTypes.func,
};
