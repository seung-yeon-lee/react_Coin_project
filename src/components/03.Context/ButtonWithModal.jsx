import React, { PureComponent } from 'react';
import Button from '../4.Design/Button';
import Text from '../4.Design/Text';
import Modal from './Modal';

class ButtonWithModal extends PureComponent {
  state = { showModal: false };
  render() {
    return (
      <>
        <Button onPress={() => this.setState({ showModal: true })}>삭제</Button>
        {this.state.showModal && (
          <Modal>
            <div>
              <Text>정말로 삭제하시겠습니까?</Text>
            </div>
            <Button>예</Button>
            <Button onPress={() => this.setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </>
    );
  }
}

export default ButtonWithModal;
