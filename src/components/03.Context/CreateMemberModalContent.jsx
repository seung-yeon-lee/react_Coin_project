import React, { PureComponent } from 'react';
import Input from '../Input';
import { Consumer } from '../05.ContextAPI/ModalContext';
import Button from '../4.Design/Button';
import Text from '../4.Design/Text';

class CreateMemberModalContent extends PureComponent {
  render() {
    return (
      <Consumer>
        {({ CloseModal }) => (
          <div>
            <div>
              <Text>회원가입</Text>
              <Input label="이메일" name="email" />
              <Input label="이름" name="name" />
              <Input label="비밀번호" name="password" />
            </div>
            <Button primary>가입하기</Button>
            <Button onPress={CloseModal}>닫기</Button>
          </div>
        )}
      </Consumer>
    );
  }
}
export default CreateMemberModalContent;

//ModalProviderWithKey.jsx 에 ModalProvider에 전달할 해시 값 추가 하기 +
