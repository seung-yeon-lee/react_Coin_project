// 하이어오더 컴포넌트로 소비자 만들기 (각기 다른 키 값의 데이터를 구독하는 소비자 컴포넌트)

import React from 'react';
import Button from '../../4.Design/Button';
import propTypes from 'prop-types';
import withLoadingContextAndKey, { loadingPropTypes } from './WithLoadingContextAndKey';
// 소비자와 추가될 프로퍼티 정보를 import

function ButtonWithLoadingContext({ children, loading, setLoading }) {
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩중' : children}</Button>;
}

ButtonWithLoadingContext.propTypes = {
  ...loadingPropTypes, // 하이어오더 컴포넌트에서 새롭게 추가된 프로퍼티 할당
  children: propTypes.string,
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(ButtonWithLoadingContext);
// 이중 커링 구조의 생성 함수를 키값 없이 사용하여 기본 공급자와 연결된 버튼 컴포넌트 생성
export const ButtonWithLoading2Context = withLoadingContextAndKey('loading2')(
  ButtonWithLoadingContext,
);
// loading2를 키값으로 생성된 공급자와 연결된 버튼 컴포넌트 생성
