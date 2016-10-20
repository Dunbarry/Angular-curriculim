angular.module('movieApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/search/search.template.html',
    controller: 'search'
  })
})
