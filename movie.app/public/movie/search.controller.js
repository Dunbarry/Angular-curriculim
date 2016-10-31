angular.module('movieApp')
.controller('search', function($scope, $http, $location, watchList){
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
  $scope.List=watchList.selections;
  // $scope.Add=watchList.addMovie;
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
