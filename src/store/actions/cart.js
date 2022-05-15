export function addToCart(wine) {
  return {
    type: "ADD_TO_CART",
    wine,
  };
}
export function removeFromCart(wine) {
  return {
    type: "REMOVE_ONE_FROM_CART",
    wine,
  };
}
