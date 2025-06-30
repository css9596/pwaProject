import React from 'react';

function CalendarBox() {
  return (
    <div className="box_calendarSchedule" style={{padding: '45px 20px 0 20px'}}>
      <div className="tab_top">
        <span className="btn_left calBtn swiper-button-disabled"></span>
        <span className="btn_right calBtn swiper-button-disabled"></span>
        <span className="btn_more" onClick={() => window.open('https://calendar.google.com', 'googleCalendar')}></span>
        <div className="swiper-container swiper-container-horizontal" id="cal_swiper">
          <div id="BOARD_PORTLET" className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active" style={{width: '96.2px'}}>
              <span id="calTab0" className="on">내 캘린더 일정</span>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar_list">
        <ul id="eventList">
          <li><span className="txt_date" style={{width:'75px'}}>2025-06-30</span> <span className="txt_title"><span style={{maxWidth:'95%', float:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>회의</span></span></li>
          <li><span className="txt_date" style={{width:'75px'}}>2025-07-01</span> <span className="txt_title"><span style={{maxWidth:'95%', float:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>업무 점검</span></span></li>
          <li><span className="txt_date" style={{width:'75px'}}>2025-07-02</span> <span className="txt_title"><span style={{maxWidth:'95%', float:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>외부 미팅</span></span></li>
          <li><span className="txt_date" style={{width:'75px'}}>2025-07-03</span> <span className="txt_title"><span style={{maxWidth:'95%', float:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>프로젝트 리뷰</span></span></li>
          <li className="calendar_notice">※ 실제 연동/슬라이드는 추후 구현</li>
        </ul>
      </div>
      <div className="board_paging">
        <span className="paging_num">오늘부터 7일간</span>
        <ul className="util_btn">
          <li className="btn_prev" style={{opacity: 0.3}} id="iPre"></li>
          <li className="btn_next no_br_r" style={{opacity: 1}} id="iNext"></li>
        </ul>
      </div>
    </div>
  );
}

export default CalendarBox;
