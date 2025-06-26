import React from 'react';

function UserBox() {
  return (
    <div className="box_user">
      <div className="date_info">
        2025.06.26 THU <span id="js_clock">12:34:56</span>
      </div>
      <div className="user_info">
        {/* 출퇴근 버튼 등 우상단 영역 필요시 여기에 추가 */}
        <div className="photo_area clearfix">
          <div className="photo_circle_section">
            <div className="photo_circle_area">
              <img src="" alt="photo" style={{ width: '95px', height: '95px', objectFit: 'cover' }} />
            </div>
            {/* 사진변경 버튼: <a href="#" className="edit_circle">사진변경</a> */}
          </div>
          <div className="user_txt">
            <div className="user_txt_area">
              <div className="user_name">최성식</div>
              <div className="user_position">프로</div>
              <div className="user_position">채널계서비스파트</div>
            </div>
          </div>
        </div>
        <div className="link_area">
          <ul>
            <li><a href="#">메일 <strong>0</strong></a></li>
            <li><a href="#">전자결재 <strong>0</strong></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
