import React, {useEffect, useState}  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';

import Header from './components/header'
import HomeTop from './components/Home--Top'
import Carrousel from './components/carrousel'
import TopWine from './components/Top--Wine'
import AboutTop from './components/About--Top';

function App() {

  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 100){
        setBlackHeader(true);
      } else {  
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="App">
      <Router>

      <Header path="*" black={blackHeader}/>

        <Route exact path="/">
          <HomeTop/>
          <Carrousel title="Promotion"/>
          <TopWine></TopWine>
        </Route>      
        
        <Route exact path="/About">
          <AboutTop></AboutTop>
        </Route>

        <Route exact path="/Contact">

        </Route>

        <Route exact path="/Shop">
          <Carrousel title="Promotion"/>
          <Carrousel title="Promotion"/>
          <Carrousel title="Promotion"/>
          <Carrousel title="Promotion"/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
