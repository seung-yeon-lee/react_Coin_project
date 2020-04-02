import React from 'react';
import PropTypes from 'prop-types';
import withLoadingContext from './WithLoadingContext';
import Button from '../4.Design/Button';

function ButtonWithContext({ label, loading, setLoading }) {
  //공급자 data를 props로 받은 후
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩 중' : label}</Button>;
}

ButtonWithContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithContext);
//만들어 둔 하이어오더 컴포넌트에 인자로 전달하여 구현
