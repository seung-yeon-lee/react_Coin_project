// Theme.js에 테마파일로 설정한 것을 공용 스타일 컴포넌트 함수로만들기

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// react-with-styles의 테마 관리자를 import
import arhroditeInterface from 'react-with-styles-interface-aphrodite';
// 서버 출력을 도와주는 아프로디테  라이브러리의 버전을  import
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

// react-with-styles에서 사용하는 함수들을 import
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme);
// Theme에서 작성한 테마파일을 등록
ThemedStyleSheet.registerInterface(arhroditeInterface);
// 아프로디테를 테마관리자에 적용

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };

export default withStyles;
