import React from 'react';

function UserBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>2025.06.26 THU <span id="js_clock">12:34:56</span></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: 16 }}>
          <img src="https://smart2.dbinc.co.kr/common/encPic.do?ENC_PARAM=c2Rzk7MK0Eyn6sVbyjAiuS5+gOMmRCFkM4U+F1iUlY8AoBz6ZAeVwNtNkVGY2msu3gqQNJzGOQGSG7DAwl8Wb14wjgbO6Q/8BTUActO5x3PdPMNwEV10t5Tp/2Ntqbcq" alt="photo" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e5e5e5' }} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>최성식</div>
          <div style={{ color: '#666', fontSize: 15 }}>프로</div>
          <div style={{ color: '#666', fontSize: 15 }}>채널계서비스파트</div>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 16 }}>
          <li><a href="#">메일 <strong style={{ color: '#f37315' }}>0</strong></a></li>
          <li><a href="#">전자결재 <strong style={{ color: '#f37315' }}>0</strong></a></li>
        </ul>
      </div>
    </div>
  );
}

export default UserBox;
