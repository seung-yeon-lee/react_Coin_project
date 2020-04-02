//소비자를 반환하는 하이어오더 컴포넌트, context를 전달 받아 구조 분해할당하여 wrap..의 props로 전달
import React from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent => {
  const { displayName, name: component } = WrappedComponent;
  const wrappedComponentName = displayName || component;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context;
    return (
      <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
      //Context로 전달받은 객체를 프로퍼티로 변환하여 전달//
    );
  }
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
  };
  return WithLoadingContext;
};
