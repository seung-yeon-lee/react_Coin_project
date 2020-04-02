import React from 'react';

export default function withHoc(WrapperdComponent) {
  const { displayName, name } = WrapperdComponent; // wrapperComponent의 displayName, name 을 추출
  const wrapperdComponentName = displayName || name; //값이있다면 적용

  return class withHoc extends React.Component {
    static displayName = `withHoc(${wrapperdComponentName})`;
    //확장 컴포넌트(현재)에서 기존 컴포넌트 이름 출력 (혼란스러움 제거)
    render() {
      return <WrapperdComponent {...this.props} />;
    }
  };
}
