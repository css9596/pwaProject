import React from 'react';

function SearchBox() {
  return (
    <div className="box_search">
      <div className="styled_select">
        <label htmlFor="searchType">회사</label>
        <select id="searchType">
          <option>회사</option>
        </select>
      </div>
      <input className="search_input" type="text" placeholder="직원 조회" />
      <button className="btn_search">검색</button>
    </div>
  );
}

export default SearchBox;
