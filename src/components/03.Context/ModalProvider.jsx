// Modal Component를 포함하는 Provider, 함수정의 후 컨텍스트 데이터에 전달

import React, { PureComponent, createContext } from 'react';
import Modal from './Modal';
import Button from '../4.Design/Button';
import Text from '../4.Design/Text';

const { Provider, Consumer } = createContext({});
export { Consumer };

export default class ModalProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handelClose = this.handelClose.bind(this);
    this.handelOpen = this.handelOpen.bind(this);
  }
  handelClose() {
    this.setState({ showModal: false });
  }
  handelOpen() {
    this.setState({ showModal: true });
  }
  checkPoint = () => {
    alert('삭제기능 미구현');
  };
  render() {
    return (
      <Provider value={{ openModal: this.handelOpen, closeModal: this.handelClose }}>
        {this.props.children}
        {this.state.showModal && (
          <Modal>
            <div>
              <Text>정말로 삭제 하시겠습니까?</Text>
            </div>
            <Button primary onPress={this.checkPoint}>
              {' '}
              예
            </Button>
            <Button onPress={() => this.setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </Provider>
    );
  }
}
