angular.module('teaApp')
.factory('shoppingCart', function(){
  var shoppingCart = {};
  shoppingCart.contents=[];
  return shoppingCart;
})
