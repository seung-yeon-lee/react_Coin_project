import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
import { Provider } from 'react-redux';
//리덕스 스토어는 앱 전체에 한개만 사용하므로 최상단 컴포넌트에 추가
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
// 모달 공급자 추가

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <MainPage />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
