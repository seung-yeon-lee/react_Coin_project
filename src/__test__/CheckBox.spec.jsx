import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from '../components/4.Design/CheckBox';

describe('<checkBox>', () => {
  it('renders without crashing', () => {
    //render()함수 오류 검증
    expect(() => {
      shallow(<CheckBox name="required">테스트</CheckBox>);
    }).not.toThrow();
  });
  it('displays errorMessage', () => {
    const errorMessage = '오류 메시지';
    const errorHtml = shallow(
      <CheckBox name="name" errorMessage={errorMessage}>
        테스트
      </CheckBox>,
    )
      .dive() //하위 컴포넌트까지 출력
      .find('span')
      .html(); //html함수 사용 > 출력된 HTML을 문자열로 변환
    expect(errorHtml).toContain(errorMessage);
    //expect()함수가 반환한 toContain함수를 사용하여 HTML에 오류 메시지가 포함되어있는지 검증
  });
  it('calls back onChange on Clicked', () => {
    const changeStub = jest.fn(); // fn()함수를 이용하여 콜백 함수 검증을 위한 감시 함수를 생성
    expect(changeStub).toHaveBeenCalledTimes(0);
    const input = shallow(
      <CheckBox name="test_name" onChange={changeStub}>
        테스트
      </CheckBox>,
    )
      .dive()
      .find('input');
    expect(input).toHaveLength(1);
    input.simulate('Click', { target: { checked: true } }); // enzyme 이벤트 메소드를 이용하여 input값 변경 이벤트(onChange) 재현하기
    //fn()함수로 반환된 콜백함수위 호출 횟수와 인자들 검사
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('required', true);
    input.simulate('click', { target: { checked: false } });
    expect(changeStub).toHaveBeenCalledWith('required', false);
  });
});
