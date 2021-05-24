import './App.css';
import React  from 'react';
import Header from './components/header'
import HomeTop from './components/Home--Top'
import Carrousel from './components/carrousel'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeTop/>
      <Carrousel title="Promoções"/>
    </div>
  );
}

export default App;
