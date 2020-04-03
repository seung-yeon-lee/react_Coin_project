//그래프 DB 구조 만들기
const initState = {
  ids: [], //data의 순서대로 저장될 배열
  entities: {}, // 해시맵 형태로 데이터 저장
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
