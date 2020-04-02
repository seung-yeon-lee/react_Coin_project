// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(1, 3));

// // 위 function은 인자로 받은 값을 곱하여 return

// function multiplyTwo(a) {
//   return multiply(a, 2);
// } // multiplyTwo 함수는 multiply 함수를 재활용 하여 a에 2를 곱한 값을 return

// console.log(multiplyTwo(3));

// const sum = (one, two) => one * two;
// const result = first => sum(first, 3);

// console.log(result(10));

// const multiply = x => a => multiply(a, x);
// const multiplyOne = multiply(3);
// const multiplyTwo = multiply(4);

// const result1 = multiplyOne(3);
// const result2 = multiplyTwo(4);

// console.log(multiply(result1, result2));

const multiply = (a, b) => a * b;
// const add = (a, b) => a + b;

// const multiplyX = x => a => multiply(a, 2);
// const addX = x => a => add(x, a);

// const addFour = addX(4);
// const multiplyTwo = multiplyX(2);
// const multiplyThree = multiplyX(3);
// const formula = x => addFour(multiplyThree(multiplyTwo(x)));
// //위 코드는 오른쪽 > 왼쪽으로 이해하기 힘들고 가독성이 떨어짐 // 밑 코드 참조
// // => ((x+4) *3) *2
// // const formula2 = x => multiplyTwo(multiplyThree(addFour(x)))

// [multiplyTwo, multiplyThree, addFour].reduce(
//   (prevFunc, nextFunc) => {
//     return value => {
//       return nextFunc(prevFunc(value));
//     };
//   },
//   k => k,
// );

// function compose() {
//   const funcArr = Array.prototype.slice.call(arguments); //slice를 사용해 나열형 자료를 배열로 변환 일종의 트릭으로 ,arguments를 배열로 변환할떄 사용
//   return funcArr.reduce(
//     (prevFunc, nextFunc) => {
//       return value => nextFunc(prevFunc(value));
//     },
//     k => k,
//   );
// }
// const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour); // 함수 배열값을 전달하지 않고 인자 항목을 원하는 만큼 전달, 조합해서 사용
// // 함수목록들(...addFor)들은 모두 인자를 1개만 받음 다중인자로 활용하려면? ↓

// function compose() {
//   const funcArr = Array.prototype.slice.call(arguments); //slice를 사용해 나열형 자료를 배열로 변환 일종의 트릭으로 ,arguments를 배열로 변환할떄 사용
//   return funcArr.reduce(
//     (prevFunc, nextFunc) => {
//       return () => {
//         const args = Array.prototype.slice.call(arguments);
//         return nextFunc(prevFunc.apply(null, args)); //apply함수는 인자에 전달된 배열을 전달받아서 나열형 인자로 실행 되도록 도움
//       };
//     },
//     [초기값],
//   );
// }
// // 더욱 간결하게 하려면 전개 연산자 (...) 을 사용..

// function compose(...arguments) {
//   return funcArr.reduce(
//     (prevFunc, nextFunc) => {
//       return (...args) => nextFunc(prevFunc(...args));
//     },
//     [초깃값],
//   );
// }
import React, { Component } from 'react';
import axios from 'axios'
import { renderNothing } from 'recompose';

class Delete extends Component {
    state ={
      data : null
    };

    async initialize(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        this.setState({
          data: response.data
        });
      }catch(error){
         console.error(error)
      }
    };

    componentDidMount(){
      this.initialize();
    }
  
  render() {
      const { data } = this.state;
      if(!data) return null;
    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}

export default Delete;

// Hoc 원리
// 1. parameter로 component를 받아온다
// 2. 내부에서 new component 생성
// 3. 해당 component 안에서 1번에서 가져온 컴포넌트를 render
// 4. 자신이 받아온 props들은 그대로 파라미터로 받아온 component에 재 주입

const withRequest = url => WrappedComponent => {
  return class extends Component{
    render(){
      return(
        <WrappedComponent {...this.props} /
      )
    }
  }
}