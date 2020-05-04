//Modal로 거래화면 추가

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Spacing from '../../Spacing';
import Input from '../../Input';
import Button from '../../Button';
import InlineList from '../../InlineList';
import Form from '../../Form';
import { Consumer as Modal } from '../../Modal/context';

class TradeCoinPage extends PureComponent {
  handleSubmit = (values, closeModal) => {
    const { name, code, createTransaction } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };
    createTransaction(formValues, closeModal);
    //2번쨰 인자로 closeModal 콜백함수가 두번쨰 인자로 전달
  };

  render() {
    const { name, price, type, loading } = this.props;
    const typeName = type === 'sell' ? '판매' : '구매';
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={values => this.handleSubmit(values, closeModal)}
            //values = currentPrice, amount ?
            //Form 컴포넌트의 onSubmit 프로퍼티로 전달한 handleSubmit() 콜백 함수의 인자로 values,colseModal 전달
            initValues={{ currentPrice: price }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {name} {typeName}
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="금액"
                      value={values['currentPrice']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input
                      name="amount"
                      label="수량"
                      value={values['amount']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary disabled={loading}>
                      {loading ? '거래처리중' : typeName}
                      {/* loading프로퍼티 값에 따라 판매/구매 버튼 메시지를 변경하여 로딩 상태표시
                      처리중일떄는 버튼을 비활성화 하여 두번 눌리는 것을 방지 */}
                    </Button>
                    <Button onPress={closeModal} disabled={loading}>
                      취소
                    </Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}

TradeCoinPage.propTypes = {
  createTransaction: PropTypes.func,
};

export default TradeCoinPage;
