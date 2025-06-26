import React from 'react';

function Header() {
  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #e5e5e5', padding: '0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: 64, maxWidth: 1400, margin: '0 auto' }}>
        <a href="/" style={{ minWidth: 200, display: 'flex', alignItems: 'center' }}>
          <img src="https://lh3.googleusercontent.com/ZMXwQN4JR9Ov7fq9LvSmtVhpdYZUiD5Io5iI_P-5hOZLm4hR-Y8xD_8YBDRlbg-qaO3ZxSj75szQliCCxCXIv_M_b0Ga6mc8ak8stxh-" alt="로고" style={{ maxHeight: 35 }} />
        </a>
        <nav style={{ flex: 1, marginLeft: 32 }}>
          <ul style={{ display: 'flex', gap: 24, listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#" style={{ color: '#222', fontWeight: 500 }}>홈</a></li>
            <li><a href="#">메일</a></li>
            <li><a href="#">게시판</a></li>
            <li><a href="#">전자결재</a></li>
            <li><a href="#">업무마당</a></li>
            <li><a href="#">회의실예약</a></li>
            <li><a href="#">드라이브</a></li>
            <li><a href="#">근태관리</a></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: 16 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="도움말">❓</button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="로그아웃">🔒</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
