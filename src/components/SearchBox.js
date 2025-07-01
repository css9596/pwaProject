import React from 'react';

function SearchBox() {
  return (
    <div
      className="box_search"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '18px 18px 18px 18px',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        border: '1px solid #e5e5e5',
        marginBottom: 16
      }}
    >
      <select
        className="search_select"
        style={{
          flex: '0 0 120px',
          maxWidth: 140,
          height: 38,
          fontSize: 16
        }}
      >
        <option>DB Inc.</option>
      </select>
      <input
        type="text"
        className="search_input"
        placeholder="직원 조회"
        aria-label="직원 검색"
        style={{
          flex: '1 1 180px',
          maxWidth: 200,
          minWidth: 120,
          height: 38,
          fontSize: 16,
          marginRight: 0
        }}
      />
      <button
        className="btn_search"
        style={{
          flex: '0 0 100px',
          minWidth: 80,
          height: 40,
          fontSize: 16,
          marginLeft: 0,
          borderRadius: 8
        }}
      >
        직원 조회
      </button>
    </div>
  );
}

export default SearchBox;
