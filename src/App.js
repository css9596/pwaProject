import React from 'react';
import Header from './components/Header';
import UserBox from './components/UserBox';
import SystemBox from './components/SystemBox';
import CalendarBox from './components/CalendarBox';
import BoardBox from './components/BoardBox';
import SearchBox from './components/SearchBox';
import WidgetBox from './components/WidgetBox';
import Footer from './components/Footer';
import './portal.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="contents">
        <article className="layout_1">
          <UserBox />
          <SystemBox />
        </article>
        <article className="layout_2">
          <CalendarBox />
          <BoardBox />
        </article>
        <article className="layout_3">
          <SearchBox />
          <WidgetBox />
          {/* 근태/출퇴근 등 우측 영역 추가 필요시 여기에 컴포넌트 삽입 */}
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default App;