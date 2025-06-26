import React from 'react';

function Header() {
  return (
    <header>
      <div className="head">
        <a href="/" className="logo">
          <img src="https://lh3.googleusercontent.com/ZMXwQN4JR9Ov7fq9LvSmtVhpdYZUiD5Io5iI_P-5hOZLm4hR-Y8xD_8YBDRlbg-qaO3ZxSj75szQliCCxCXIv_M_b0Ga6mc8ak8stxh-" alt="로고" />
        </a>
        <nav>
          <ul>
            <li><a href="#" className="on">홈</a></li>
            <li><a href="#">메일</a></li>
            <li><a href="#">게시판</a></li>
            <li><a href="#">전자결재</a></li>
            <li><a href="#">업무마당</a></li>
            <li><a href="#">회의실예약</a></li>
            <li><a href="#">드라이브</a></li>
            <li><a href="#">근태관리</a></li>
          </ul>
        </nav>
        <div className="util">
          <ul>
            <li className="btn_help"><a href="#">도움말</a></li>
            <li className="btn_logout"><a href="#">로그아웃</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
