angular.module('movieApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/movie/search.template.html',
    controller: 'search'
  })
  .when('/roster/:searchTerm',{
    templateUrl: '/movie/roster.template.html',
    controller: 'roster'
  })
  .when('/details/:movie',{
    templateUrl:'/movie/details.template.html',
    controller:'details'
  })
})
