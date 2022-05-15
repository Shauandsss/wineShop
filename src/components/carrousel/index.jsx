import "./carrousel.css";

import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FaCartPlus } from "react-icons/fa";

import * as CartActions from "../../store/actions/cart";

const Carrousel = ({ wines, addToCart }) => {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + 220;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 17 * 220;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: 17 * 220,
          }}
        >
          {wines.wines.map((wine) => (
            <div key={wine.id} id="movieRow--item" className="movieRow--item">
              <div className="Card">
                <div className="Img--Card">
                  <div className="square" />
                  <img src={wine.img_url} alt="bottle of wine" />
                </div>
                <FaCartPlus onClick={() => addToCart(wine)} />
                <h3>{wine.name}</h3>
                <h4 className="Value"> R$ {wine.price}</h4>

                <div className="Promo">
                  <h4 className="Promo--Value">
                    R$ {Math.round(wine.price * 0.8)}
                  </h4>
                </div>
              </div>
            </div>
          ))}

          <div id="movieRow--item" className="movieRow--item"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wines: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Carrousel);
