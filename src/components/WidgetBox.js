import React from 'react';

function WidgetBox() {
  return (
    <div className="box_widget">
      <button className="widget_button">함께변화</button>
      <button className="widget_button">DB Daily News</button>
      <button className="widget_button">업무 시스템 운영자 안내</button>
      <button className="widget_button">개발 요구사항 등록/진행현황</button>
      <div className="widget_attendance">
        <div className="attendance_title">근태현황</div>
        <div className="attendance_date">2025.06.30</div>
        <ul className="attendance_list">
          <li>강준구 프로 훈련(14:00~18:00)</li>
          <li>차혜정 프로 연차(17:00~18:00)</li>
        </ul>
        <div className="attendance_btns">
          <button className="btn_attend">출근</button>
          <button className="btn_leave">퇴근</button>
        </div>
      </div>
    </div>
  );
}

export default WidgetBox;
