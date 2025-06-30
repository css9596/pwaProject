import React from 'react';

function SearchBox() {
  return (
    <div className="box_search">
      <select className="search_select">
        <option>DB Inc.</option>
      </select>
      <input
        type="text"
        className="search_input"
        placeholder="직원 조회"
        aria-label="직원 검색"
      />
      <button className="btn_search">직원 조회</button>
    </div>
  );
}

export default SearchBox;
