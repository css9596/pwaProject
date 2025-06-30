import React from 'react';

const widgetButtons = [
  { label: '함께변화', icon: 'https://lh3.googleusercontent.com/pJbJsyxZB0oI_NfilRtjst-jPg8LS1-Woi65aF7pAPPuBfuXdSKxvCb2Rf6bmLEEuGqf5seVMbW-xiBESCDxvUV97pNjJgNb5Qob8wFF=s0' },
  { label: 'DB Daily News', icon: 'https://lh3.googleusercontent.com/5BAl-0Btl50mnLZozc0b0BU9Vu1AEtLt70PRVUPmKKIgJ3nUuHPGWyHgDeJHCdXa5z7jB16aQNvMaEeYttw0IHa3_CoIOqMxhuhS7ic=s0' },
  { label: '업무 시스템 운영자 안내', icon: 'https://lh3.googleusercontent.com/1-f6oobQicPeTPHmBGGjjUWoZ2JEwyLK1CP0cfwovK1bUsTsnB0v6Y9s9Hb3GBGpie9YLGXi7-_uNE7k9alRaxceY7FFqhDEoKDOuF4=s0"' },
  { label: '개발 요구사항 등록/진행현황', icon: 'https://lh3.googleusercontent.com/Ec2pXRWheBdcv7J6ZVPSj-3O-5IzXGnnKGo-1lMYDuduO5MBVtERq5WOmjC9_ummgYUkIPa-mbhC3tgiIX5w8i3b97wETXHOFUjAEo4=s0' }
];

function WidgetBox() {
  return (
    <div className="box_widget">
      {widgetButtons.map((btn, idx) => (
        <button className="widget_button" key={idx} style={{display:'flex',alignItems:'center',gap:10,justifyContent:'flex-start',padding:'10px 12px'}}>
          <img src={btn.icon} alt="" style={{width:28,height:28,marginRight:8}} />
          <span>{btn.label}</span>
        </button>
      ))}
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
