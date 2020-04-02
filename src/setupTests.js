// enzyme 라이브러리 설정,  enzyme-adapter-react-16.3(react 16.3버전 부터 지원하는 LifeCycle 함수를 위한 것) 적용

import { configure } from 'enzyme'; // enzyme 설정 함수 configure() 함수 import
import Adapter from 'enzyme-adapter-react-16.3'; // 생명주기 라이브러리 import
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important'

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();
// 아프로디테의 DOM 함수 호출 과정을 중지


configure({ adapter: new Adapter() }); //Test 환경에서 enzyme을 새 버전 생명주기 함수와 함께 추가

afterEach(() => {
  // test 코드가 실행 된 후
  console.error.mockClear(); // error함수 객체에 spyOn() 함수로 추가된 감지 코드를 제거
});

beforeEach(() => {
  //test 코드가 실행 되기 전
  jest.spyOn(console, 'error').mockImplementation(e => {
    //감시함수  spyOn()함수를 사용하여, console.error 대신 mock...에 정의 된 함수가 실행 되도록 설정
    throw new Error(e); //console.error()함수를 실행할 때 전달된 인자로 오류를 발생하도록 설정.
  });
});
