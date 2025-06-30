import React from 'react';

function SearchBox() {
  return (
    <div className="box_search" style={{display:'flex',alignItems:'center',gap:8,padding:0}}>
      <select className="search_select" style={{flex:'0 0 120px',maxWidth:140}}>
        <option>DB Inc.</option>
      </select>
      <input
        type="text"
        className="search_input"
        placeholder="직원 조회"
        aria-label="직원 검색"
        style={{flex:'1 1 160px',maxWidth:180,minWidth:120,marginRight:0}}
      />
      <button className="btn_search" style={{flex:'0 0 90px',minWidth:70,marginLeft:0}}>
        직원 조회
      </button>
    </div>
  );
}

export default SearchBox;
