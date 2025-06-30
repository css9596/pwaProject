import React from 'react';

function WidgetBox() {
  return (
    <div className="box_widget">
      <div id="widgetHtml" style={{paddingBottom:'15px'}}>
        <p>
          <a href="javascript:;">
            <img src="https://lh3.googleusercontent.com/pJbJsyxZB0oI_NfilRtjst-jPg8LS1-Woi65aF7pAPPuBfuXdSKxvCb2Rf6bmLEEuGqf5seVMbW-xiBESCDxvUV97pNjJgNb5Qob8wFF=s0" className="fr-fic fr-dib" alt="위젯1" />
          </a>
        </p>
      </div>
      <div id="widgetHtml" style={{paddingBottom:'15px'}}>
        <p>
          <a href="https://news.dbinc.co.kr" target="_blank" rel="noopener noreferrer">
            <img src="https://lh3.googleusercontent.com/5BAl-0Btl50mnLZozc0b0BU9Vu1AEtLt70PRVUPmKKIgJ3nUuHPGWyHgDeJHCdXa5z7jB16aQNvMaEeYttw0IHa3_CoIOqMxhuhS7ic=s0" className="fr-fic fr-dib" alt="위젯2" />
          </a>
        </p>
      </div>
      <div id="widgetHtml" style={{paddingBottom:'15px'}}>
        <p>
          <a href="javascript:;">
            <img src="https://lh3.googleusercontent.com/1-f6oobQicPeTPHmBGGjjUWoZ2JEwyLK1CP0cfwovK1bUsTsnB0v6Y9s9Hb3GBGpie9YLGXi7-_uNE7k9alRaxceY7FFqhDEoKDOuF4=s0" className="fr-fic fr-dib" alt="위젯3" />
          </a>
        </p>
      </div>
      <div id="widgetHtml" style={{paddingBottom:'15px'}}>
        <p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScMFCnL2IBauWWVBP1jJ1VYXFJGfw4HqTmvz4Mc4qkPHVZHJw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            <img src="https://lh3.googleusercontent.com/Ec2pXRWheBdcv7J6ZVPSj-3O-5IzXGnnKGo-1lMYDuduO5MBVtERq5WOmjC9_ummgYUkIPa-mbhC3tgiIX5w8i3b97wETXHOFUjAEo4=s0" className="fr-fic fr-dib" alt="위젯4" />
          </a>
        </p>
      </div>
      <div id="divPersonalWidget">
        <div style={{paddingBottom:'10px'}}>
          <iframe src="/widget/widgetTemplate.do?extFlagCd=EXT_001&extUrl=https://smart2.dbinc.co.kr/portlet/portlet001_m01.do&widgetId=69BB8B5CF7A5B3E24429CBB245061084" scrolling="no" style={{backgroundColor:'#fff', overflow:'hidden', border:0}} width="100%" height="292px" title="개인위젯"></iframe>
        </div>
      </div>
    </div>
  );
}

export default WidgetBox;
