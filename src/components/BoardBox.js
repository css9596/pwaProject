import React from 'react';

function BoardBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>게시판</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', color: '#888', fontSize: 15 }}>
        <li>게시글 목록이 여기에 표시됩니다.</li>
        <li style={{ color: '#bbb', fontSize: 13 }}>※ 실제 연동/탭/슬라이드는 추후 구현</li>
      </ul>
    </div>
  );
}

export default BoardBox;
