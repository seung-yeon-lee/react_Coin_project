// 주소와 redux 연결하기, 스토어에 주소의 값을 담으면  검색 결과 화면을 주소로 요청 가능

//Redux 저장소에 주소 정보 설정할 액션 추가, location으로 전달 받은 주소 정보를 store에 전달예정

export const SET_LOCATION = 'router/SET_LOCATION';

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: { location },
  };
}
