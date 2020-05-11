// SPA에서 처음 출력하는 CoinApp 컴포넌트와 같은 개념으로 next.js가 출력할
// App 컴포넌트 작성

import React from 'react';
import App, { Container } from 'next/app';
import configureStore from '../src/Create_Coin_WebSite/store/configureStore';
import { Provider } from 'react-redux';
import ModalProvider from '../src/Create_Coin_WebSite/ModalProvider';
import AppLayout from '../src/Create_Coin_WebSite/components/AppLayout';
import NotificationContainer from '../src/Create_Coin_WebSite/containers/NotificationContainer';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RouterStateContainer from '../src/Create_Coin_WebSite/containers/RouterStateContainer';

// const isServer = typeof window === 'undefined';

// class MyApp extends App {
//   store = configureStore();

//   render() {
//     const { Component, router, pageProps } = this.props;
//     const Router = isServer ? StaticRouter : BrowserRouter;
//     // next.js에는 브라우저 객체(window)가 없으므로 StaticRouter를 사용하여
//     // 화면을 출력해야함, 서버 출력 이후 JS가 동작하면 BrowserRouter 화면을 출력하도록 구성
//     const routerProps = isServer ? { location: router.asPath } : {};

//     return (
//       <Container>
//         <Provider store={this.store}>
//           <Router {...routerProps}>
//             <RouterStateContainer />
//             <ModalProvider>
//               <AppLayout>
//                 <Component {...pageProps} />
//                 <NotificationContainer />
//               </AppLayout>
//             </ModalProvider>
//             <NotificationContainer />
//           </Router>
//         </Provider>
//       </Container>
//     );
//   }
// }
// export default MyApp;

const isServer = typeof window === 'undefined';

class MyApp extends App {
  store = configureStore();

  render() {
    const { Component, router, pageProps } = this.props;
    const Router = isServer ? StaticRouter : BrowserRouter;
    const routerProps = isServer ? { location: router.asPath } : {};

    return (
      <Container>
        <Provider store={this.store}>
          <Router {...routerProps}>
            <RouterStateContainer />
            <ModalProvider>
              <AppLayout>
                <Component {...pageProps} />
                <NotificationContainer />
              </AppLayout>
            </ModalProvider>
            <NotificationContainer />
          </Router>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
