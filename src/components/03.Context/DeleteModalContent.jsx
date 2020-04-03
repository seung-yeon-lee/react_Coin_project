//삭제 컴포넌트 구현
import React from 'react';
import Button from '../4.Design/Button';
import Text from '../4.Design/Text';
import { Consumer } from '../05.ContextAPI/ModalContext';

export default function DeleteModalContent({ id, name }) {
  return (
    <Consumer>
      {({ CloseModal }) => (
        <div>
          <div>
            <Text>
              {id}번쨰{name}을 삭제하시겠습니까?
            </Text>
          </div>
          <Button primary>예 </Button>
          <Button onPress={CloseModal}>종료</Button>
        </div>
      )}
    </Consumer>
  );
}
