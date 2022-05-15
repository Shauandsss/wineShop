import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import { FaPlus, FaMinus } from "react-icons/fa";

import "./cartPage.css";

const CartPage = ({ cart, addToCart, removeFromCart }) => {
  function order(a, b) {
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
  }
  console.log(cart);
  return (
    <div className="Cart">
      {cart.cart[0].totalQuantity > 0 ? (
        <div className="Cart--Table">
          <h1>Cart</h1>
          {cart.cart[0].itens
            .map((cartItem) => (
              <div key={cartItem.id} id={cartItem.id} className="Cart-Item">
                <div className="Cart-Item-ImgHolder">
                  <img src={cartItem.img_url} />
                </div>
                <div className="Cart-Item-Texts">
                  <div className="Cart-Item-ItemTitle">
                    <div>{cartItem.name}</div>
                  </div>
                  <div className="Cart-Item-Price">
                    ${cartItem.total_price.toFixed(2)}
                  </div>
                  <div className="Cart-Item-QuantityControl">
                    <FaPlus
                      onClick={() =>
                        addToCart(
                          cart.wines.filter(
                            (wine) => wine.id === cartItem.id
                          )[0]
                        )
                      }
                    />
                    <div className="Cart-Item-Quantity">
                      {cartItem.quantity}
                    </div>
                    <FaMinus
                      onClick={() =>
                        removeFromCart(
                          cart.wines.filter(
                            (wine) => wine.id === cartItem.id
                          )[0]
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))
            .sort(order)}
          <div className="Cart-Totals">
            <div>${cart.cart[0].totalPrice.toFixed(2)}</div>
            <div>{cart.cart[0].totalQuantity}</div>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>Seu carrinho está vazio</h1>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
