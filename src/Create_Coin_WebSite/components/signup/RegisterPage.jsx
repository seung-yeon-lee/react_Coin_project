// 가입 화면은 모달창을 사용 하여 출력 TradeCoinPage와 비슷한 구조
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Spacing from '../../Spacing';
import Input from '../../Input';
import InlineList from '../../InlineList';
import Button from '../../Button';
import Form from '../../Form';
import { Consumer as Modal } from '../../Modal/context';

class RegisterPage extends PureComponent {
  handleSubmit = (values, closeModal) => {
    const { createUser } = this.props;
    createUser(values, closeModal);
  };
  render() {
    const { loading } = this.props;
    return (
      <Modal>
        {({ closeModal }) => (
          //values console checking....
          <Form onSubmit={values => this.handleSubmit(values, closeModal)}>
            <Form.Consumer>
              {({ onChange }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    회원등록
                  </Text>
                  <Spacing bottom={2}>
                    {/* onchange console checking.. */}
                    <Input name="userId" label="사용자 아이디" onChange={onChange} />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input name="totalAmount" type="number" label="자산 총액" onChange={onChange} />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button type="submit" primary disabled={loading}>
                      회원 등록
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

RegisterPage.propTypes = {
  loading: PropTypes.bool,
  createUser: PropTypes.func,
};

export default RegisterPage;

// data 컴포넌트 작성 =>
