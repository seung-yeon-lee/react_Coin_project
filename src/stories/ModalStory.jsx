import React from 'react';
import { storiesOf } from '@storybook/react';
import CreateMemberModalContent from '../components/03.Context/CreateMemberModalContent';
import Modal from '../components/03.Context/Modal';
import Button from '../components/4.Design/Button';
import Text from '../components/4.Design/Text';
import ButtonWithModal from '../components/03.Context/ButtonWithModal';
import ModalProvider, { Consumer } from '../components/03.Context/ModalProvider';
import ModalProviderWithKey, {
  CONFIRM_DELETE_MODAL,
  CREATE_MEMBER_MODAL,
} from '../components/03.Context/ModalProviderWithKey';
import { Consumer as ModalConsumer } from '../components/03.Context/CreateModalProvider';

storiesOf('Modal', module)
  .addWithJSX('Basic Modal', () => (
    <Modal>
      <div>
        <Text>정말로 삭제 하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </Modal>
  ))
  .addWithJSX('BtnWithModal', () => <ButtonWithModal />)
  .addWithJSX('ModalProvider', () => (
    <ModalProvider>
      <div>
        <Text>다음 버튼을 눌러 모달을 실행합니다</Text>
        <Consumer>{({ openModal }) => <Button onPress={() => openModal()}>Open</Button>}</Consumer>
      </div>
    </ModalProvider>
  ))
  .addWithJSX('d', () => (
    <ModalProviderWithKey>
      <div>
        <Text>모달열기</Text>
        <ModalConsumer>
          {({ openModal }) => <Button onPress={() => openModal(CONFIRM_DELETE_MODAL)}>모달</Button>}
        </ModalConsumer>
      </div>
    </ModalProviderWithKey>
  ))
  .addWithJSX('Register', () => (
    <ModalProviderWithKey>
      <div>
        <Text>다음 버튼을 눌러 모달을 실행합니다</Text>
        <ModalConsumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CONFIRM_DELETE_MODAL)}>모달열기</Button>
          )}
        </ModalConsumer>
        <ModalConsumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>회원가입</Button>
          )}
        </ModalConsumer>
      </div>
    </ModalProviderWithKey>
  ))
  .addWithJSX('DeletePrams', () => (
    <ModalProviderWithKey>
      <div>
        <Text>다음버튼을 눌러 모달을 실행합니다</Text>
        <ModalConsumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CONFIRM_DELETE_MODAL, { id: 1, name: '상품' })}>
              모달열기
            </Button>
          )}
        </ModalConsumer>
      </div>
    </ModalProviderWithKey>
  ));
