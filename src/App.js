import React from 'react';
import Header from './components/Header';
import UserBox from './components/UserBox';
import SystemBox from './components/SystemBox';
import CalendarBox from './components/CalendarBox';
import BoardBox from './components/BoardBox';
import SearchBox from './components/SearchBox';
import WidgetBox from './components/WidgetBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ background: '#f5f6fa', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', maxWidth: 1400, margin: '0 auto', padding: 24 }}>
        <div style={{ flex: '0 0 320px', marginRight: 24 }}>
          <UserBox />
          <SystemBox />
        </div>
        <div style={{ flex: 1 }}>
          <CalendarBox />
          <BoardBox />
        </div>
        <div style={{ flex: '0 0 320px', marginLeft: 24 }}>
          <SearchBox />
          <WidgetBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;