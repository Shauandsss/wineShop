import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.scss";

import store from "./store";

import Header from "./components/header";
import HomeTop from "./components/Home--Top";
import Carrousel from "./components/carrousel";
import TopWine from "./components/Top--Wine";
import AboutTop from "./components/About--Top";
import CartPage from "./components/cartPage";

function App() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header path="*" black={blackHeader} />

          <Route exact path="/wineShop/">
            <HomeTop />
            <Carrousel title="Promotion" />
            <TopWine />
          </Route>

          <Route exact path="/wineShop/About">
            <AboutTop />
          </Route>

          <Route exact path="/wineShop/Contact"></Route>

          <Route exact path="/wineShop/Shop">
            <Carrousel />
            <Carrousel />
            <Carrousel />
            <Carrousel />
          </Route>

          <Route exact path="/wineShop/Cart">
            <CartPage />
          </Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
