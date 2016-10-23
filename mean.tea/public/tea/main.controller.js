angular.module('teaApp')
.controller('main', function($scope, $http, $routeParams, teaService){
  $scope.inventory= teaService.inventory;
})
