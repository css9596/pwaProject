import React from 'react';

function CalendarBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>내 캘린더 일정</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', color: '#222', fontSize: 15 }}>
        <li><b>2025-06-26</b> 10:00 ~ 11:00 : 팀 회의</li>
        <li><b>2025-06-27</b> 14:00 ~ 15:00 : 프로젝트 리뷰</li>
        <li><b>2025-06-28</b> 09:00 ~ 09:30 : 아침 업무 점검</li>
        <li><b>2025-06-29</b> 13:00 ~ 14:00 : 외부 미팅</li>
        <li style={{ color: '#bbb', fontSize: 13, marginTop: 8 }}>※ 실제 연동/슬라이드는 추후 구현</li>
      </ul>
    </div>
  );
}

export default CalendarBox;
