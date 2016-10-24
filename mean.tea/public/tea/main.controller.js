angular.module('teaApp')
.controller('main', function($scope, $http, $routeParams, teaService, shoppingCart){
  $scope.shoppingCart= shoppingCart.contents
  $scope.inventory= teaService.inventory;
  $scope.toCart=function(teaToAdd){
    shoppingCart.contents.push(teaToAdd)
  }
})
