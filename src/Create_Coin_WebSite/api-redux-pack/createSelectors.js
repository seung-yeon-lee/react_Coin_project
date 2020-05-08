// 셀렉터 모듈화(커링)
// 기존 작성한 transactionSeletors.js와 비교하면 몇가지 추가된 점 이외에는 거의 유사

import { createSelector } from 'reselect';
import { CREATE, UPDATE, FETCH, FETCH_LIST, RESET } from './actionTypes';

export default function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];
  const entitiesSelector = state => resourceSelector(state).entities;
  const collectionSelector = createSelector(
    [resourceSelector],
    ({ ids, entities }) => ids.map(id => entities[id]),
    // reselector 적용, 1번째 인자 = 셀렉터 배열
    // 2번쨰 인자 = 셀렉터가 return한 값을 이용하는 변환 작업 함수
  );
  const loadingStateSelector = state => resourceSelector(state).loadingState;
  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createLoadingStateSelector = state =>
    loadingStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateLoadingStateSelector = state =>
    loadingStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH}/${resourceName}`];

  const collectionErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createErrorStateSelector = state => errorStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateErrorStateSelector = state => errorStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberErrorStateSelector = state => errorStateSelector(state)[`${FETCH}/${resourceName}`];

  const paginationSelector = state => {
    const { pagination } = resourceSelector(state);
    return {
      number: pagination.number || 0,
      size: pagination.size,
    };
  };
  return {
    entitiesSelector,
    collectionLoadingStateSelector,
    createLoadingStateSelector,
    updateLoadingStateSelector,
    memberLoadingStateSelector,
    paginationSelector,
    collectionSelector,
  };
}

// transactionSelectors.js 수정 하기,
