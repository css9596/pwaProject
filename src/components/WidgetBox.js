import React from 'react';

const widgetButtons = [
  { label: '함께변화', icon: 'https://lh3.googleusercontent.com/pJbJsyxZB0oI_NfilRtjst-jPg8LS1-Woi65aF7pAPPuBfuXdSKxvCb2Rf6bmLEEuGqf5seVMbW-xiBESCDxvUV97pNjJgNb5Qob8wFF=s0' },
  { label: 'DB Daily News', icon: 'https://lh3.googleusercontent.com/5BAl-0Btl50mnLZozc0b0BU9Vu1AEtLt70PRVUPmKKIgJ3nUuHPGWyHgDeJHCdXa5z7jB16aQNvMaEeYttw0IHa3_CoIOqMxhuhS7ic=s0' },
  { label: '업무 시스템 운영자 안내', icon: 'https://lh3.googleusercontent.com/1-f6oobQicPeTPHmBGGjjUWoZ2JEwyLK1CP0cfwovK1bUsTsnB0v6Y9s9Hb3GBGpie9YLGXi7-_uNE7k9alRaxceY7FFqhDEoKDOuF4=s0' },
  { label: '개발 요구사항 등록/진행현황', icon: 'https://lh3.googleusercontent.com/Ec2pXRWheBdcv7J6ZVPSj-3O-5IzXGnnKGo-1lMYDuduO5MBVtERq5WOmjC9_ummgYUkIPa-mbhC3tgiIX5w8i3b97wETXHOFUjAEo4=s0' }
];

function WidgetBox() {
  return (
    <div
      className="box_widget"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        justifyContent: 'center',
        height: '100%'
      }}
    >
      {widgetButtons.map((btn, idx) => (
        <button
          className="widget_button"
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100px',
            minHeight: '80px',
            borderRadius: 16,
            background: 'none',
            border: 'none',
            boxShadow: 'none',
            padding: 0
          }}
        >
          <img
            src={btn.icon}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </button>
      ))}
    </div>
  );
}

export default WidgetBox;