import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey';
//공급자에 정의된 컨텍스트 데이터의 키 값과 항목 정보 import

export const loadingPropTypes = contextPropTypes;
//공급자의 데이터의 자료형을 대입
export default (contextKey = DEFAULT_KEY) => WrappedComponent => {
  //공급자의 컨텍스트 데이터 키값을 인자로 전달받는 하이어오더 컴포넌트 생성
  const { displayName, name: component } = WrappedComponent;
  const wrappedComponentName = displayName || component;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context[contextKey]; //키 값에 맞는 컨텍스트 데이터를 구조 분해 할당
    return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
  }

  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    [contextKey]: contextPropTypes, //데이터는 자료형, 이후 구독자의 컨텍스트 데이터 이름이나, 자료형이 변경되면 자동으로 소비자에게도 적용
  };
  return WithLoadingContext;
};

//소비자를 반환하는 하이오더 컴포넌트
