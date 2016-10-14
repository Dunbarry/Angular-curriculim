console.log('drone online')

var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})

app.controller("MySecondController", function($scope){
  $scope.favColor = "Purple";
  $scope.secondsInACentury= (3600*24)*365*100;
  $scope.rightNow= new Date();
})
