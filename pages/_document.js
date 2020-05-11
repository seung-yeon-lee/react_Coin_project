// Server Side Rendering 도입, 기존 거래소는 검색 엔진에서는 검색되지 않음
// SPA 구조상 index.html, bundle.js로 구성하는데 사용자가 사이트에 접속해야만 동작,
// 서버 출력을 지원하는 특수 서버를 사용해야함 (next.js)
// next.js를 통해 출력할 화면에 대한 파일을 구성하여  만든 컴포넌트

import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { StyleSheetServer } from 'aphrodite';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    const { renderedClassNames: ids } = css;
    return { ...html, css, ids };
  }

  constructor(props) {
    super(props);
    /* Take the renderedClassNames from aphrodite (as generated
    in getInitialProps) and assign them to __NEXT_DATA__ so that they
    are accessible to the client for rehydration. */
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`
body {
  margin: 0;
  padding: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eeeeee;
}
          `}</style>
          <style data-aphrodite dangerouslySetInnerHTML={{ __html: this.props.css.content }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
