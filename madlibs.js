var click=0;

var app = angular.module("madApp", []);
app.controller("madController", function($scope){
  $scope.field = {
    name: "",
    dob: "",
    mammal:"",
    verbage:"",
    insult:""
  },
  $scope.clearField = function (){
    $scope.field = {
      name:"",
      dob:"",
      mammal:"",
      verbage:"",
      insult:"",
    }
  }
})
