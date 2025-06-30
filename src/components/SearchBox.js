import React from 'react';

function SearchBox() {
  return (
    <div className="box_search">
      <div className="styled_select">
        <label htmlFor="searchFlag">DB Inc.</label>
        <select id="searchFlag" name="searchFlag" className="search_select">
          <option value="DG02" defaultValue>DB Inc.</option>
          <option value="all">관계사</option>
        </select>
      </div>
      <input type="text" id="nav-search-input" name="nav-search-input" className="search_input" placeholder="직원 조회" aria-label="직원 검색" />
      <a href="#" className="btn_search">직원 조회</a>
    </div>
  );
}

export default SearchBox;
