import React from 'react';

function SearchBox() {
  return (
    <div
      className="box_search"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 10px',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        border: '1px solid #e5e5e5',
        marginBottom: 16,
        minHeight: 48,
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: 360
      }}
    >
      <select
        className="search_select"
        style={{
          flex: '0 0 90px',
          maxWidth: 100,
          height: 32,
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
          flex: '1 1 100px',
          maxWidth: 120,
          minWidth: 60,
          height: 32,
          fontSize: 15,
          borderRadius: 6
        }}
      />
      <button
        className="btn_search"
        style={{
          flex: '0 0 60px',
          minWidth: 60,
          height: 34,
          fontSize: 15,
          marginLeft: 0,
          borderRadius: 8,
          boxSizing: 'border-box',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: 0
        }}
      >
        직원 조회
      </button>
    </div>
  );
}

export default SearchBox;
