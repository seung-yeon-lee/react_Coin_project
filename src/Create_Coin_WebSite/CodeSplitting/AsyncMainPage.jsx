import React from 'react';
import AsyncComponent from './AsyncComponent';
// 기존 mainPage 컴포넌트가 지연 로딩되도록 작성

export default function AsyncMainPage() {
  return <AsyncComponent loader={() => import('../components/main/MainPage')} />;
}
