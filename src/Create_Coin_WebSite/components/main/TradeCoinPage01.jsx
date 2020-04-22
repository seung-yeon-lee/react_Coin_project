//Modal로 거래화면 추가

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Spacing from '../../Spacing';
import Input from '../../Input';
import Button from '../../Button';
import InlineList from '../../InlineList';
import Form from '../../Form';
import Api from '../../Api';
import { Consumer as Modal } from '../../Modal/context';

class TradeCoinPage extends PureComponent {
  handleSubmit = (values, closeModal) => {
    const { name, code, createTransaction } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };
    console.log(formValues);
    Api.post('/transactions', formValues) // post를 호출하여, 거래내역(transaction) 생성
      .then(() => closeModal()); //거래 요청 마친 후 자동으로 모달창 close
  };

  render() {
    const { name, price, type } = this.props;
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
                    <Button primary>{typeName}</Button>
                    <Button onPress={closeModal}>취소</Button>
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
