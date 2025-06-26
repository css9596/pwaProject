import React from 'react';

function BoardBox() {
  return (
    <div className="box_board">
      <div className="title_top">게시판</div>
      <div className="board_list">
        <ul>
          <li><span className="txt_alim mark">[공지]</span> <span className="txt_title">2025-06-26 : 전사 시스템 점검 안내</span></li>
          <li><span className="txt_title">2025-06-25 : 7월 휴가 신청 안내</span></li>
          <li><span className="txt_title">2025-06-24 : 사내 보안 교육 일정</span></li>
          <li><span className="txt_title">2025-06-23 : 신규 입사자 환영</span></li>
          <li className="board_notice">
            ※ 실제 연동/탭/슬라이드는 추후 구현
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BoardBox;
