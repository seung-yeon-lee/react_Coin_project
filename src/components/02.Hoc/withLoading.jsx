//로딩 표시 화면 하이어오더 컴포넌트로 만들어 두기
import React from 'react';

export default function(loadingMessages = {}) {
  //확장 컴포넌트에서 출력할 메시지를 전달받는 커링(고차)함수
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent; //추출
    const { wrappedComponent } = displayName || componentName; //순서대로 할당

    function WithLoading({ isLoadings, ...propss }) {
      //필요한 프로퍼티만 구조할당, isloading은 확장 컴포넌트에는 필요없으므로, isLoading을 제외
      if (isLoadings) return loadingMessages;
      return <WrappedComponent {...propss} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponent})`;
    return WithLoading;
  };
}
