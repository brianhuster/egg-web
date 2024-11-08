import React  from 'react';
import Header             from './components/Header';
import ContentContainer   from './components/ContentContainer';
import Footer             from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;