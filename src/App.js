import React, { useEffect } from 'react';
import 'swiper/css';
import $ from 'jquery';
import './portal.css';
import './style.css';
import Header from './components/Header';
import UserBox from './components/UserBox';
import SystemBox from './components/SystemBox';
import CalendarBox from './components/CalendarBox';
import BoardBox from './components/BoardBox';
import SearchBox from './components/SearchBox';
import WidgetBox from './components/WidgetBox';
import Footer from './components/Footer';

function App() {
  // body에 스킨 클래스 적용 (예: skin-6 = 오렌지)
  useEffect(() => {
    document.body.classList.add('skin-6');
    return () => document.body.classList.remove('skin-6');
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="contents">
        <div className="layout_1">
          <UserBox />
          <SystemBox />
        </div>
        <div className="layout_2">
          <CalendarBox />
          <BoardBox />
        </div>
        <div className="layout_3">
          <SearchBox />
          <WidgetBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;