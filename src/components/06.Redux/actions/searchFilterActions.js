//자료를 검색하기 위해 단어를 스토어에 저장
export const SET_FILTER = 'searchFilter/set_filter';
export const RESET_FILTER = 'searchFilter/reset_filter';

export const setFilter = (filterName, value) => ({
  type: SET_FILTER,
  payload: {
    filterName, //검색 항목
    value, // 검색 값
  },
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});
