angular.module('teaApp')
.controller('index', function($scope, $http, $routeParams, teaService, shoppingCart){
  $scope.shoppingCart=shoppingCart.contents;
})
