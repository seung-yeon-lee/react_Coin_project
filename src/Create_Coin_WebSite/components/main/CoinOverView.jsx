import React, { PureComponent } from 'react';
import Heading from '../../Heading';
import InlineList from '../../InlineList';
import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="BitCoin" priceLabel="4,212,000원"></CoinDashlet>
          <CoinDashlet name="Ethereum" priceLabel="216,000원"></CoinDashlet>
          <CoinDashlet name="DoitCoin" priceLabel="10,000원"></CoinDashlet>
          <CoinDashlet name="Data Connecting Test" priceLabel="Components" />
        </InlineList>
      </>
    );
  }
}
export default CoinOverview;
