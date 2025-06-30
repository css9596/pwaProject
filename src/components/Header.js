import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="head">
        <h1 className="logo" style={{ minWidth: '200px' }}>
          <a href="javascript:;">
            <img id="headerImg" src="https://lh3.googleusercontent.com/ZMXwQN4JR9Ov7fq9LvSmtVhpdYZUiD5Io5iI_P-5hOZLm4hR-Y8xD_8YBDRlbg-qaO3ZxSj75szQliCCxCXIv_M_b0Ga6mc8ak8stxh-" alt="DB Inc. 로고" style={{ maxHeight: '35px' }} />
          </a>
        </h1>
        <nav>
          <ul id="ulTopMenu" className="gnb_list">
            <li><a href="javascript:;" className="on" id="mMenu0">홈</a></li>
            <li><a href="javascript:;" id="mMenu1">메일</a></li>
            <li><a href="javascript:;" id="mMenu2">게시판</a></li>
            <li><a href="javascript:;" id="mMenu3">전자결재</a></li>
            <li><a href="javascript:;" id="mMenu4">업무마당</a></li>
            <li><a href="javascript:;" id="mMenu5">회의실예약</a></li>
            <li><a href="javascript:;" id="mMenu6">드라이브</a></li>
            <li><a href="javascript:;" id="mMenu7">근태관리</a></li>
          </ul>
        </nav>
        <div className="util">
          <ul>
            <li className="btn_help"><a href="javascript:;"></a></li>
            <li className="btn_logout"><a href="javascript:;" id="aBtnLogout"></a></li>
          </ul>
        </div>
        <div className="log_out" id="divLogout" style={{ display: 'none' }}>
          <div className="log_list">
            <ul id="ulDeptList">
              <li style={{ fontSize: '13px', borderBottom: '1px solid #d3d3d3', padding: '14px 10px' }}>
                <i className="fa fa-user"></i>
                <span className="log_name"> <b>DB Inc. / 채널계서비스파트 / 최성식</b></span><br /><br />
                <i className="fa fa-envelope"></i>
                <span> <b>choi.sungsik@dbinc.co.kr</b></span>
              </li>
            </ul>
          </div>
          <a href="javascript:;" className="bt_logout">로그아웃</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
