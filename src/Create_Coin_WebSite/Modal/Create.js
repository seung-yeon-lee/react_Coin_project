// ModalProvider 함수 생성, 다중 모달 화면 구성 파라미터로 들어오게될 것임

import React, { PureComponent } from 'react';
import Modal from '../Modal';
import { Provider } from './context';

export default function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends PureComponent {
    state = { showModal: false };

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
      return (
        <Provider
          value={{
            openModal: this.handleOpen,
            closeModal: this.handleClose,
          }}
        >
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
