// next.js는 기본 주소(/)에 접속하면 pages 폴더의 index.js를 읽어 화면을 구성
// 기본 주소에 접속하면 보여줄 indexDocument 화면을 추가

import React, { PureComponent } from 'react';
import MainPage from '../src/Create_Coin_WebSite/components/main/MainPage';

class IndexDocument extends PureComponent {
  render() {
    return <MainPage />;
  }
}

export default IndexDocument;
