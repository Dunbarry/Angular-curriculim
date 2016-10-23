console.log('Drone Online')

angular.module('teaApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/tea/main.template.html',
    controller: 'main'
  })
})
