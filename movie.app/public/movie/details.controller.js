angular.module('movieApp')
.controller('details', function ($scope, $http, $routeParams, $location, watchList) {
  $scope.movieInfo = {}
  $http.get('http://www.omdbapi.com/?t=' + $routeParams.movie + '&tomatoes=true')
    .then(function (results) {
      console.log(results.data)
      $scope.movieInfo = results.data
    })
    .catch(function (err) {
      console.error('Error motherfucker.', err)
    })
  $scope.rotten = false
  $scope.rottenSwap = function () {
    $scope.rotten = !$scope.rotten
  }
  $scope.addMovie = function (movieToAdd) {
    watchList.selections.push(movieToAdd)
    console.log(watchList.selections)
    $location.path('/')
  }
})
