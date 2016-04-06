import Ember from 'ember';

export function totalPrice(cartItems) {
  debugger;
  var totalPrice = 0;
  console.log(cartItems, "cart items")
  cartItems.forEach(function(item) {
    console.log(item.price, "hey");
     var price = parseInt(item.price);
    totalPrice = price + totalPrice;
  });
  return totalPrice;
}

export default Ember.Helper.helper(totalPrice);
