import React from 'react';

function WidgetBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>위젯/배너</div>
      <div style={{ textAlign: 'center' }}>
        <img src="https://lh3.googleusercontent.com/pJbJsyxZB0oI_NfilRtjst-jPg8LS1-Woi65aF7pAPPuBfuXdSKxvCb2Rf6bmLEEuGqf5seVMbW-xiBESCDxvUV97pNjJgNb5Qob8wFF=s0" alt="배너1" style={{ width: '90%', borderRadius: 8, marginBottom: 12 }} />
        <img src="https://lh3.googleusercontent.com/5BAl-0Btl50mnLZozc0b0BU9Vu1AEtLt70PRVUPmKKIgJ3nUuHPGWyHgDeJHCdXa5z7jB16aQNvMaEeYttw0IHa3_CoIOqMxhuhS7ic=s0" alt="배너2" style={{ width: '90%', borderRadius: 8, marginBottom: 12 }} />
      </div>
    </div>
  );
}

export default WidgetBox;
