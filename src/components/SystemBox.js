import React from 'react';

function SystemBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>우리 회사 시스템</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <div style={{ width: 64, textAlign: 'center', marginBottom: 16 }}>
          <img src="https://lh3.googleusercontent.com/vTJcfynkAEr1z0T_mwvUBdDdxsCwmxqi8l8OsdrBf0hAD_t1YQZrtETVH_aaC-baKMKos7oQmZgZndE9I8ufIkXIHw" alt="전자전표" style={{ width: 40, height: 40 }} />
          <div style={{ fontSize: 12, marginTop: 4 }}>전자전표</div>
        </div>
        <div style={{ width: 64, textAlign: 'center', marginBottom: 16 }}>
          <img src="https://lh3.googleusercontent.com/NTAmNSjyzPl0XAChVr1q4_wI9INPbbX1gI8Wf0-AsBwKWTzZTjGNLmtunJCASt9knui7xGaFzhRAxTllfOOjpqjzrhA" alt="프로젝트손익관리" style={{ width: 40, height: 40 }} />
          <div style={{ fontSize: 12, marginTop: 4 }}>프로젝트손익관리</div>
        </div>
        {/* ...다른 시스템 아이콘 추가 가능... */}
      </div>
    </div>
  );
}

export default SystemBox;
