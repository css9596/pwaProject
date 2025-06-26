import React from 'react';

function CalendarBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>내 캘린더 일정</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', color: '#888', fontSize: 15 }}>
        <li>오늘부터 7일간의 일정이 여기에 표시됩니다.</li>
        <li style={{ color: '#bbb', fontSize: 13 }}>※ 실제 연동/슬라이드는 추후 구현</li>
      </ul>
    </div>
  );
}

export default CalendarBox;
