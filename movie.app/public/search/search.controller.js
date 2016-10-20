angular.module('movieApp')
.controller('search', function($scope, $http, $location){
  $scope.yourMovies=[];
  $scope.search=function(searchTerm){
    $http.get('http://www.omdbapi.com/?s='+searchTerm+'&type=movie')
    .then(function(results){
      console.log(results.data.Search)
      $scope.yourMovies=results.data.Search;
    })
  }
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
