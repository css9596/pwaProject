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
      <div className="date_info">
        <span className="visually-hidden">오늘 날짜</span>
        <span className="date">2025.06.27 FRI</span>
        <span id="js_clock" className="clock" aria-live="polite">{clock}</span>
      </div>
      <div className="user_info">
        <div className="btn_clock">
          <button
            type="button"
            className={`btn_attend${isClockedIn ? ' on' : ''}`}
            aria-pressed={isClockedIn}
            aria-label={isClockedIn ? '퇴근' : '출근'}
            onClick={() => setIsClockedIn(v => !v)}
          >
            <span className="visually-hidden">{isClockedIn ? '퇴근' : '출근'} 버튼</span>
            {isClockedIn ? '퇴근' : '출근'}
          </button>
        </div>
        <div className="photo_area">
          <div className="photo_circle_section">
            {/* 프로필 이미지 없을 때 */}
            <a href="#" className="edit_circle" title="사진변경" tabIndex={0} aria-label="사진 변경">edit</a>
          </div>
          <div className="user_txt">
            <div className="user_txt_area">
              <p className="user_name">최성식</p>
              <p className="user_position">프로</p>
              <p className="user_position">채널계서비스파트</p>
            </div>
          </div>
        </div>
        <div className="link_area">
          <ul id="divMyBookmark">
            <li>
              <a href="#" className="mail_link" data-tooltip-text="읽지않은 메일">
                메일<strong id="mailCnt">{mailCnt}</strong>
              </a>
            </li>
            <li>
              <span style={{ color: '#505050', fontSize: 13, display: 'block' }}>
                <a href="#" style={{ display: 'inline' }}>전자결재</a>
                <a href="#" style={{ display: 'inline' }}><strong id="notyCnt" data-tooltip-text="통보">{notyCnt}</strong></a>
                <a href="#" style={{ display: 'inline' }}><strong id="apprCnt" data-tooltip-text="미결">{apprCnt}&nbsp;/</strong></a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
