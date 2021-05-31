import './App.css';
import React  from 'react';
import Header from './components/header'
import HomeTop from './components/Home--Top'
import Carrousel from './components/carrousel'
import TopWine from './components/Top--Wine'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeTop/>
      <Carrousel title="Promotion"/>
      <TopWine></TopWine>
    </div>
  );
}

export default App;
