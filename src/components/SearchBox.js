import React from 'react';

function SearchBox() {
  return (
    <div
      className="box_search"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '16px 14px',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        border: '1px solid #e5e5e5',
        marginBottom: 16,
        minHeight: 56,
        boxSizing: 'border-box'
      }}
    >
      <select
        className="search_select"
        style={{
          flex: '0 0 110px',
          maxWidth: 120,
          height: 36,
          fontSize: 15,
          borderRadius: 6
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
          flex: '1 1 140px',
          maxWidth: 180,
          minWidth: 100,
          height: 36,
          fontSize: 15,
          borderRadius: 6
        }}
      />
      <button
        className="btn_search"
        style={{
          flex: '0 0 80px',
          minWidth: 70,
          height: 38,
          fontSize: 15,
          marginLeft: 0,
          borderRadius: 8,
          boxSizing: 'border-box',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        직원 조회
      </button>
    </div>
  );
}

export default SearchBox;
