angular.module('teaApp')
.controller('main', function ($scope, $http, $routeParams, teaService, shoppingCart) {
  $scope.shoppingCart = shoppingCart.contents
  $scope.inventory = teaService.inventory
  $scope.toCart = function (teaToAdd, orderSize) {
    while(orderSize > 0) {
      shoppingCart.contents.push(teaToAdd)
      orderSize--
    }
    console.log(shoppingCart.contents)
  }
})
