// Data Component, store connect,

import { connect } from 'react-redux';
import SearchResultTable from '../6.1 화면컴포넌트/SearchResultTable';

const mapStateToProps = (state) => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce(
    (result, value) => result || Boolean(value),
    false, //검색 항목이 있는지 검사 , Boolean으로 true를 반환하는 과정 한번 거치기
  );

  const { ids, entities } = collection;
  const items = ids
    .map((id) => entities[id]) //해시맵 형태로 되어있는 그래프 DB를 객체 배열로 변환
    .filter(
      (entity) =>
        !hasFilter || //검색 단어에 대한 데이터가 없으면 모든 목록을 반환
        Object.entries(searchFilter).reduce(
          // filter()는 true인 data만 추출
          // reduce()로 id,name,age 조건을 모두 만족해야지만 반환 및 추출
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  console.log(ids);
  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);

let search = { id: 1, name: 'react' };

let result = Object.values(search);

result.reduce((ac, af) => ac || Boolean(af), false);
