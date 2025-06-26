import React from 'react';

function SearchBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>직원 검색</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <select style={{ border: '1px solid #ddd', borderRadius: 4, padding: 4 }}>
          <option>회사</option>
        </select>
        <input type="text" placeholder="직원 조회" style={{ flex: 1, border: '1px solid #ddd', borderRadius: 4, padding: 4 }} />
        <button style={{ background: '#f37315', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 16px' }}>검색</button>
      </div>
    </div>
  );
}

export default SearchBox;
