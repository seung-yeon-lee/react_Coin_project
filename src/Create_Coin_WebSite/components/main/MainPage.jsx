import React, { PureComponent } from 'react';
import CoinOverview from '../main/CoinOverView';
import TransactionListContainer from '../../containers/main/TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <>
        <CoinOverview />
        <TransactionListContainer />
      </>
    );
  }
}
export default MainPage;
