import React from 'react';

function WidgetBox() {
  return (
    <div className="box_widget">
      <div className="title_top">위젯/배너</div>
      <div className="widget_content">
        <img src="https://lh3.googleusercontent.com/pJbJsyxZB0oI_NfilRtjst-jPg8LS1-Woi65aF7pAPPuBfuXdSKxvCb2Rf6bmLEEuGqf5seVMbW-xiBESCDxvUV97pNjJgNb5Qob8wFF=s0" alt="배너1" className="widget_banner" />
        <img src="https://lh3.googleusercontent.com/5BAl-0Btl50mnLZozc0b0BU9Vu1AEtLt70PRVUPmKKIgJ3nUuHPGWyHgDeJHCdXa5z7jB16aQNvMaEeYttw0IHa3_CoIOqMxhuhS7ic=s0" alt="배너2" className="widget_banner" />
      </div>
    </div>
  );
}

export default WidgetBox;
