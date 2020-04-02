//커링으로 중복 공급자 문제 해결, 키 이름을 인자로 받아 > 원하는 공급자의 컨텍스트 데이터를 반환하는 커링 함수 만들기
import React from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingKey'; // 공급자의 기본 키 값 정보를 공유
export const contextPropTypes = {
  //공급자에 정의된 컨텍스트 데이터의 자료형을 공유
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default (contextKey = DEFAULT_KEY) => {
  //컨텍스트 데이터의 기본 값을 정함.
  class LoadingProviderWithKey extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loading: false };
    }
    getChildContext() {
      return {
        [contextKey]: {
          //contextKey에 해당하는 로딩 상태 정보객체(공급자 컨텍스트 데이터)를 return;
          loading: this.state.loading,
          setLoading: this.setLoading,
        },
      };
    }
    setLoading = loading => {
      this.setState({ loading });
    };
    render() {
      return this.props.children;
    }
  }
  LoadingProviderWithKey.childContextTypes = {
    [contextKey]: contextPropTypes,
  };
  return LoadingProviderWithKey;
};
