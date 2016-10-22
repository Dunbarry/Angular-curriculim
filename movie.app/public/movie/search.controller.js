angular.module('movieApp')
.controller('search', function($scope, $http, $location){
  $scope.search=function(searchTerm){
    $location.path('/roster/'+searchTerm);
  };
  $scope.requestDetails=function(movieSelected){
    $location.path('/details/'+movieSelected);
  };
  $scope.home=function(){
    $location.path('/');
  }

  // Existing List
  $scope.watchList={};
  $scope.addMovie=function(movieToAdd){
    $scope.watchlist.push(movie);
    $location.path('/');
  };
})

// $scope.create= function(){
//   const user ={
//     username: $scope.username,
//     password: $scope.password
//   }
//   $http.post('/users/create', user)
//   .then(function(result){
//     localStorage.setItem('user', JSON.stringify(result.data))
//
//     $location.path('/dashboard')
//   })
//   .catch(function(err){
//     console.error('There was an error motherfucker.', err)
//   })
// }
