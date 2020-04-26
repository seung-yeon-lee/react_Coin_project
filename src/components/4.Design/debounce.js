// 디바운스 도입 하여 알림 메시지 빨리 사라지지 않게 만들기

export function debounce(func, delay) {
  //func = 서버요청, delay = 지연시간
  let inDebounce; // 지연 대기시간 내에 입력 신호가 호출될 떄 실행 대기 함수를 취소하기 위함
  return function(...args) {
    // ...arg는 run함수의 인자를 담고있는 배열을 얻기 위해
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
    //inDebounce에는 setTimeOut 함수의 반환값이 저장,
    // 값이 있다면 clear로 취소,
  };
}
const run = debounce(val => console.log(val), 100);
run('data');
run('finalData');
//즉 100ms 안에 run을 호출하지 않으면 최종 호출된 run함수에 대한 결과만 확인
