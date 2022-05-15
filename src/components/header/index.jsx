import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import "./header.css";

const Header = ({ cart, black }) => {
  console.log();

  return (
    <div>
      <header className={black ? "black" : "header"}>
        <Link to="/wineShop/" className="logo">
          Veneza
        </Link>
        <div className="buttons">
          <Link className="button" to="/wineShop/Shop">
            Buy from us
          </Link>
          <Link className="button" to="/wineShop/Contact">
            Contact us
          </Link>
          <Link className="button" to="/wineShop/About">
            About us
          </Link>
          <Link to="/wineShop/Cart">
            <FaShoppingCart size={"2vh"} />
            {cart[0].totalQuantity}
          </Link>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
