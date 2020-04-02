// ModalProvider를 이용하여 만든 생성 함수 ( 다양한 모달 구현)
import React, { PureComponent } from 'react';
import Modal from './Modal';
import { Provider, Consumer } from '../05.ContextAPI/ModalContext'; //지정해둔 공급자 참조
export { Consumer };

export default function CreateModalProvider(ContentMap = {}) {
  //ContentMap = 모달을 출력할 컴포넌트 목록이 키(contentId)로 구분되어 저장
  return class ModalProvider extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { showModal: false };
    }
    handleOpen = (contentId, modalProps) => {
      this.contentId = contentId;
      this.modalProps = modalProps;
      this.setState({ showModal: true });
    };
    handleClose = () => {
      this.setState({ showModal: false });
    };
    render() {
      const { children } = this.props;
      const { showModal } = this.state;
      const ModalContent = ContentMap[this.contentId];
      // ModalContent에 모달 본문 목록(ContentMap) 중 this.contentId 키에 해당하는
      // 한개의 컴포넌트만 출력하도록 구현

      return (
        <Provider value={{ openModal: this.handleOpen, CloseModal: this.handleClose }}>
          {children}
          {showModal && ModalContent && (
            <Modal>
              <ModalContent {...this.modalProps} />
            </Modal>
          )}
        </Provider>
      );
    }
  };
}
