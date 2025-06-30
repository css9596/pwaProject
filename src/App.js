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
          <br/>
          <SystemBox />
        </article>
        <article className="layout_2">
          <CalendarBox />
          <br/>
          <BoardBox />
        </article>
        <article className="layout_3">
          <SearchBox />
          <br/>
          <WidgetBox />
          {/* 출퇴근/위젯 등 우측 영역 추가 필요시 이곳에 */}
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default App;