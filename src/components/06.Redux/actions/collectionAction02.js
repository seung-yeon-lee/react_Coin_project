//id age 수정
export const SET_AGE = 'set_age';

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});
