// import React from 'react';
// import { shallow } from 'enzyme';
// import INPUT from '../components/Input';

// describe('<INPUT>', () => {
//   it('renders without crashing', () => {
//     expect(() => {
//       shallow(<INPUT name="test_name" />); //shallow 함수안에 INPUT 컴포넌트를 넣음
//     }).not.toThrow(); //jest의 toThrow()함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류 발생 여부 검사, 오류가 없다면 테스트를 통과
//   });
//   it('assign the prop value and type', () => {
//     const expectedValue = '123';
//     const wrapper = shallow(<INPUT name="test_name" value={expectedValue} />);
//     expect(wrapper.find('input').prop('value')).toBe(expectedValue); // prop함수로 value의 프로퍼티값과 컴포넌트에 전달된 값(expectedValue)을 검증
//     const { type, value } = wrapper.find('input').props(); // 필요한 프로퍼티 항목을 추출
//     expect(value).toBe(expectedValue); // props()함수에서 추출한 value,type의 프로퍼티(attribute)값을 검증,
//     expect(type).toBe('text');
//   });
//   it('renders errorMessage', () => {
//     //setProps로 변경된 프로퍼티값 전달
//     const wrapper = shallow(<INPUT name="test_name" />);
//     4;
//     expect(wrapper.find('.error')).toHaveLength(0); //error 스타일을 포함한 오류 여부 판단
//     const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
//     wrapper.setProps({ errorMessage: expectedErrorMessage }); //setProps함수로 프로퍼티값 변경
//     expect(wrapper.find('span').prop('className')).toBe('error');
//     expect(wrapper.find('.error')).toHaveLength(1); // errorMessage의 프로퍼티가 추가되었기 떄문에 error 스타일을 포함한 오류 메세지 1개가 정상적으로 포함
//     expect(wrapper.html()).toContain(expectedErrorMessage); //html 함수를 사용하여 오류 메시지가 출력되는지 검증
//   });

//   it('calls back onChange on input change', () => {
//     // input 엘리먼트값이 변경될때 onChange 콜백함수 호출 검사
//     const changeStub = jest.fn(); // jest는 감시함수 fn()을 제공하여 생성된 함수 호출을 감시
//     const wrapper = shallow(<INPUT name="test_name" onChange={changeStub} />); //생성된 감시함수를 프로퍼티로 전달
//     expect(changeStub).not.toHaveBeenCalled(); // 이벤트 실행이전 호출되지 않은 상태를 tohavebenn...함수로 검증
//     const expectedTargetValue = 'update input';
//     wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); //
//     // simulate함수룰 사용하여 input 값이 변경되는 이벤트(onChange)를 재현, 실제 브라우저에게 전달할 값을 보냄
//     // target.value에 값이 전달 되므로 객체형으로 가상의 입력값을 전달
//     expect(changeStub).toHaveBeenCalledTimes(1); //fn()함수로 변한된 콜백함수를 Times,With 메소드로 호출 횟수, 인자 들을 검사
//     expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
//   });

//   // prop()함수 : enzyme 객체가 반환한 컴포넌트에 확인하고자 하는 프로퍼티의 이름을 인자로 전달
//   // props()함수 : 전체 프로퍼티값 들을 객체로 반환하므로, 여러개의 프로퍼티에 대한 작업을 할 수 있음;

//   it('renders one input', () => {
//     const wrapper = shallow(<INPUT name="test_name" />); // shallow 함수는 컴포넌트 출력 후 검사할 수있는 enzyme 객체 반환, enzyme 객체는 find()함수를 포함/
//     expect(wrapper.find('input')).toHaveLength(1); //tohave..함수로 반환된 element 개수를 검증
//     expect(wrapper.find('label')).toHaveLength(1);
//   });
// });

// //흐름도 : shallow 함수로 컴포넌트를 검사할 수 있는 enzyme 객체를 얻음 , enzyme안에있는 find 함수로 엘리먼트를 추출,
// //  추출된 값은 배열,
// // expect 함수가 반환한 배열의 길이를 toHaveLength 함수로 검사
