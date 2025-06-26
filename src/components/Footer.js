import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <span className="txt_copyright">Copyright(C)2017 DB Inc. All Right Reserved.</span>
        <span className="site_link">
          <a href="https://docs.google.com/document/d/e/2PACX-1vTLQhtQr-WH7BdDJA2MujdSiuoWfZAAJKKkpZnkzgzcAlB-mwV4Z_BL0b-yr_cttNiS9CpBERN4lIgV/pub" target="_blank" rel="noopener noreferrer">[개인정보처리방침]</a>
        </span>
        {/* 모바일 버튼 등 추가 영역 필요시 여기에 */}
      </div>
    </footer>
  );
}

export default Footer;
