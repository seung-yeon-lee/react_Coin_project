import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';
import Button from '../../Button';
import InlineList from '../../InlineList';
import Card from '../../Card';
import Text from '../../Text';
//모달 공급자의 함수를 추가하여 버튼 클릭시 모달 출력되도록 구현
import { Consumer as Modal } from '../../Modal/context';
import { TRADE_COIN_MODAL } from '../../contants/modals';

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Modal>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name}
              <Text> {priceLabel} </Text>
            </Heading>
            <InlineList spacingBetween={1}>
              <Button
                primary
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'buy', name, price: priceLabel })
                }
              >
                매도
              </Button>
              <Button
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'sell', name, price: priceLabel })
                }
              >
                매수
              </Button>
            </InlineList>
          </Card>
        )}
      </Modal>
    );
  }
}

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
