import React, { PureComponent } from 'react';
import CoinOverview from '../main/CoinOverView';
import TransactionListContainer from '../../containers/main/TransactionListContainer';
import NotificationContainer from '../../containers/NotificationContainer';
//오류 메시지 출력 데이터 컴포넌트
class MainPage extends PureComponent {
  render() {
    return (
      <>
        <CoinOverview />
        <TransactionListContainer />
        <NotificationContainer />
      </>
    );
  }
}
export default MainPage;
