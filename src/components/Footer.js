import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e5e5e5', padding: '16px 0', textAlign: 'center', color: '#757575', fontSize: 14, marginTop: 32 }}>
      <span>Copyright(C)2017 DB Inc. All Right Reserved.</span>
      <span style={{ paddingLeft: 10, fontWeight: 'bold' }}>
        <a href="https://docs.google.com/document/d/e/2PACX-1vTLQhtQr-WH7BdDJA2MujdSiuoWfZAAJKKkpZnkzgzcAlB-mwV4Z_BL0b-yr_cttNiS9CpBERN4lIgV/pub" target="_blank" rel="noopener noreferrer" style={{ color: '#757575' }}>[개인정보처리방침]</a>
      </span>
    </footer>
  );
}

export default Footer;
