// 오류 메시지 출력을 위한 컴포넌트, 공용으로 제작해두었던 toast 컴포넌트 사용
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toast from '../../Toast';

class Notification extends PureComponent {
  render() {
    //작성한 data 컴포넌트에 맞게 수정, props로 반환값을 가져옴
    const { showMessage, message, warning } = this.props;
    return showMessage && <Toast message={message} warning={warning} />;
  }
}

Notification.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Notification;

// 오류 메시지와 Notification 컴포넌트를 연결하는 data Component 생성 => NotificationContainer.jsx
