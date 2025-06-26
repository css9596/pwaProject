import React from 'react';

function CalendarBox() {
  return (
    <div className="box_calendarSchedule">
      <div className="title_top">내 캘린더 일정</div>
      <div className="calendar_list">
        <ul>
          <li><a href="#"><span className="txt_date">2025-06-26</span> <span className="txt_title">10:00 ~ 11:00 : 팀 회의</span></a></li>
          <li><a href="#"><span className="txt_date">2025-06-27</span> <span className="txt_title">14:00 ~ 15:00 : 프로젝트 리뷰</span></a></li>
          <li><a href="#"><span className="txt_date">2025-06-28</span> <span className="txt_title">09:00 ~ 09:30 : 아침 업무 점검</span></a></li>
          <li><a href="#"><span className="txt_date">2025-06-29</span> <span className="txt_title">13:00 ~ 14:00 : 외부 미팅</span></a></li>
          <li className="calendar_notice">
            ※ 실제 연동/슬라이드는 추후 구현
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CalendarBox;
