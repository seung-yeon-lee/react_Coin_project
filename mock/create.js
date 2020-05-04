//대용량 데이터 처리를 위한 가성 데이터 서버 페이지 기능 추가
//코인 목록 100개를 생성, jsonServer는 목록배열을 페이지로 나눠 반환하는 기능이있음
// 쿼리스트링으로 _page= , _limit  페이지 크기값을 조정

const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
};
// axios의 params 정보만 맞추면 페이지 개념 도입가능

const createData = index => {
  switch (getRandomNumber(0, 2)) {
    case 1: {
      return {
        id: `COINONE${index}`,
        code: 'COINONE',
        name: '코인원',
        totalPrice: getRandomNumber(10000000, 800000000),
        currentPrice: getRandomNumber(20000, 25000),
        amount: getRandomNumber(1, 30),
        datetime: '2019/01/20 08:23:22',
      };
    }
    case 2: {
      return {
        id: `ETH${index}`,
        code: 'ETH',
        name: '이더리움',
        totalPrice: getRandomNumber(100000000, 500000000),
        currentPrice: getRandomNumber(400000, 600000),
        amount: getRandomNumber(100, 1000),
        datetime: '2019/01/20 08:23:22',
      };
    }
    default: {
      return {
        id: `BTX${index}`,
        code: 'BTX',
        name: '비트코인',
        totalPrice: getRandomNumber(100000000000, 200000000000),
        currentPrice: getRandomNumber(10000000, 40000000),
        amount: getRandomNumber(0, 10),
        datetime: '2019/01/20 08:23:22',
      };
    }
  }
};

module.exports = function() {
  return {
    users: [],
    transactions: Array(100)
      .fill('')
      .map((_, index) => createData(index)),
  };
};
// pagination 기능 추가하기 위해 transactionReducer 수정 => (그래프DB 구조 수정하기)
