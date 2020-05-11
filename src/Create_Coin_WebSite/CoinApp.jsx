import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import MainPage from './CodeSplitting/AsyncMainPage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//리덕스 스토어는 앱 전체에 한개만 사용하므로 최상단 컴포넌트에 추가
import NotFound from './components/RouteComponent/NotFound';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import RouterStateContainer from './containers/RouterStateContainer';
// 모달 공급자 추가

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" render={({ match }) => <NotFound match={match} />} />
              </Switch>
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;

// next js, firebase deploy, server side rendering
