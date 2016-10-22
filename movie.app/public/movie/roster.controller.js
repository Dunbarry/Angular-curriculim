angular.module('movieApp')
.controller('roster', function($scope, $http, $routeParams){
  $scope.yourMovies=[];
  $http.get('http://www.omdbapi.com/?s='+$routeParams.searchTerm+'&type=movie')
  .then(function(results){
    console.log(results.data.Search)
    $scope.yourMovies=results.data.Search;
  })
})
