import React, { useEffect, useState } from 'react';

function UserBox() {
  // 시계 구현
  const [clock, setClock] = useState('');
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
      let suffix = 'AM';
      if (h > 11) {
        suffix = 'PM';
        h = h - 12;
      }
      if (h === 0) h = 12;
      if (h < 10) h = '0' + h;
      if (m < 10) m = '0' + m;
      if (s < 10) s = '0' + s;
      setClock(`${h}:${m}:${s} ${suffix}`);
    }
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // 출퇴근 버튼 상태
  const [isClockedIn, setIsClockedIn] = useState(false);
  // 카운트 데이터
  const [mailCnt] = useState(0);
  const [notyCnt] = useState(0);
  const [apprCnt] = useState(0);

  return (
    <div className="box_user">
      <div className="date_info" style={{ marginBottom: 8 }}>
        <span className="visually-hidden">오늘 날짜</span>
        <span className="date">
          2025.06.30 MON{' '}
          <span style={{ fontWeight: 700 }}>{clock}</span>
        </span>
      </div>
      <div className="user_info">
        <div className="user_txt">
          <span className="user_name">최성식</span>
          <span className="user_position">프로</span>
          <span className="user_team">채널계서비스파트</span>
        </div>
        <ul className="user_status">
          <li>
            메일 <span className="mail_count">0</span>
          </li>
          <li>
            전자결재 <span className="approval_count">0 / 0</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserBox;
