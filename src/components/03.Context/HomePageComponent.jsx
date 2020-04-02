import React, { PureComponent } from 'react';
import LoadingProvider from './LoadingProvider';
import ButtonWithContext from './ButtonWithContext'; //소비자(관찰자)

function RowBComponent() {
  return <button>버튼</button>;
}

function RowCComponent() {
  return <ButtonWithContext>버튼</ButtonWithContext>; //소비자 출력
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <ButtonWithContext label="버어튼">상태변경</ButtonWithContext>
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
