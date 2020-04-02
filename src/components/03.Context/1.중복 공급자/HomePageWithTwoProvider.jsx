//서로 다른 컨텍스트 데이터를 가진 공급자 만들기
import React, { PureComponent } from 'react';
import {
  ButtonWithDefaultLoadingContext,
  ButtonWithLoading2Context,
} from './ButtonWithLoadingContextAndKey';
import LoadingProviderWithKey from './LoadingProviderWithKey';

const LoadingProvider1 = LoadingProviderWithKey(); //소비자에 연결 키값 전달x
const LoadingProvider2 = LoadingProviderWithKey('loading2'); //키 값 전달 o

function TableComponent() {
  return (
    <table>
      <ButtonWithDefaultLoadingContext>ContextOne</ButtonWithDefaultLoadingContext>
      <ButtonWithLoading2Context>ContextTwo</ButtonWithLoading2Context>
    </table>
  );
}

export default class HomePageWithTwoProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider1>
        <LoadingProvider2>
          <TableComponent />
        </LoadingProvider2>
      </LoadingProvider1>
    );
  }
}
