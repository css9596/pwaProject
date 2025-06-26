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

  // 출퇴근 버튼 상태(샘플)
  const [isClockedIn, setIsClockedIn] = useState(false);
  // 샘플 카운트 데이터
  const [mailCnt] = useState(0);
  const [notyCnt] = useState(0);
  const [apprCnt] = useState(0);

  return (
    <div className="box_user">
      <div className="date_info">
        <span className="visually-hidden">오늘 날짜</span>
        2025.06.26 THU <span id="js_clock" aria-live="polite">{clock}</span>
      </div>
      <div className="user_info">
        <div className="btn_clock">
          <button
            type="button"
            className={`btn_attend${isClockedIn ? ' on' : ''}`}
            aria-pressed={isClockedIn}
            onClick={() => setIsClockedIn(v => !v)}
          >
            <span className="visually-hidden">{isClockedIn ? '퇴근' : '출근'} 버튼</span>
            {isClockedIn ? '퇴근' : '출근'}
          </button>
        </div>
        <div className="photo_area">
          <div className="photo_circle_section">
            <p className="photo_circle_area">
              <img
                id="imgPhoto"
                src="https://smart2.dbinc.co.kr/common/encPic.do?ENC_PARAM=c2Rzk7MK0Eyn6sVbyjAiuS5+gOMmRCFkM4U+F1iUlY8AoBz6ZAeVwNtNkVGY2msu3gqQNJzGOQGSG7DAwl8Wb14wjgbO6Q/8BTUActO5x3PdPMNwEV10t5Tp/2Ntqbcq"
                onError={e => { e.target.onerror = null; e.target.src = '/images/cloudporte/mobile/img_myPhoto.gif'; }}
                height="95"
                alt="프로필 사진"
              />
            </p>
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
              <a href="#">
                메일
                <strong id="mailCnt" data-tooltip-text="읽지않은 메일" aria-label={`읽지않은 메일: ${mailCnt}`}>{mailCnt}</strong>
              </a>
            </li>
            <li>
              <span className="approval_area">
                <a href="#" className="approval_link">전자결재</a>
                <a href="#" className="approval_link">
                  <strong id="notyCnt" data-tooltip-text="통보" aria-label={`통보: ${notyCnt}`}>{notyCnt}</strong>
                </a>
                <a href="#" className="approval_link">
                  <strong id="apprCnt" data-tooltip-text="미결" aria-label={`미결: ${apprCnt}`}>{apprCnt}&nbsp;/</strong>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
