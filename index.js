var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
    cart.push( {[item]: Math.floor(Math.random() * 100)} );
    console.log(item + " has been added to your cart.");
    return cart;
}

function viewCart() {
    if (cart[0] == undefined) console.log("Your shopping cart is empty.");
    else {
        var string = "In your cart, you have";
        for (var i=0; i<cart.length; i++) {
            string += " " + Object.keys(cart[i]) + " at $" + cart[i][ Object.keys(cart[i]) ];
            if (i == cart.length-1) string += '.';
            else string += ',';
        }
        console.log(string);
    }
}

function total() {
  var total = 0;
  for (let i=0; i<cart.length; i++) {
      total += cart[i][ Object.keys(cart[i]) ];
  }
  return total;
}

function removeFromCart(item) {
    for (let i=0; i<cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i,1);
            return cart;
        }
    }
    console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber != undefined) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      for (let i=0; i<cart.length; i++) cart.pop();
  }
  else console.log("We don't have a credit card on file for you to place your order.");
}
