angular.module('movieApp')
.factory('watchList', function(){
  var watchList = {}
  watchList.selections=[]
  return watchList;
})
