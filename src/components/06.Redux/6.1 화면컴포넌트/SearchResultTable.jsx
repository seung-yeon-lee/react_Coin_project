//검색 입력 항목과 일치하는 결과를 보여주는 컴포넌트
// 화면 컴포넌트

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchResultTable extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <table border="1" width="100%">
        <tr>
          <td>아이디</td>
          <td>이름</td>
          <td>나이</td>
        </tr>
        {items.map(({ id, name, age }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
          </tr>
        ))}
      </table>
    );
  }
}
SearchResultTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.name,
      age: PropTypes.number,
    }),
  ),
};

SearchResultTable.defaultProps = {
  items: [],
};

export default SearchResultTable;
