// Form 컴포넌트, 공용 컴포넌트를 추가하여 입력 항목 처리,
// initValues props로 state 동기화
import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext({});

class FormProvider extends React.PureComponent {
  static Consumer = Consumer;
  static getDerivedStateFromProps({ initValues }, prevState) {
    const values = initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      errors: {},
    };
  }
  state = {};
  handleSubmit = e => {
    const { values, errors } = this.state;
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      this.props.onSubmit(values); // props로 받은 onSubmit()
      // console.log(values);
      // console.log(this.props.onSubmit);
    }
  };

  onChange = (name, updateVal) => {
    this.validate(this.state.values);
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: updateVal,
        // userId: 내가정한id : Amount: 내가정한 금액
      },
    }));
  };
  reset = () => {
    this.setState({ values: {} });
  };
  validate = values => {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({
      errors,
    });
  };
  render() {
    const { values, errors } = this.state;
    return (
      <Provider value={{ errors, values, onChange: this.onChange, reset: this.reset }}>
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}
FormProvider.propTypes = {
  validate: PropTypes.func,
};
FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};
export default FormProvider;
