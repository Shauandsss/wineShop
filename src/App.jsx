import './App.scss';
import React, {useEffect, useState}  from 'react';
import Header from './components/header'
import HomeTop from './components/Home--Top'
import Carrousel from './components/carrousel'
import TopWine from './components/Top--Wine'

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
      <Header black={blackHeader}/>
      <HomeTop/>
      <Carrousel title="Promotion"/>
      <TopWine></TopWine>
    </div>
  );
}

export default App;
