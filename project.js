angular.module('project', ['ngRoute', 'firebase'])
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ProjectListController as cnt',
      templateUrl:'list.html',
      resolve: {
        stats: function () {
         var cnt = this;
      cnt.stats = [
      {name:'learn angular', value:true},
      {name:'build an angular app', value:false}];
          return cnt;
        }
      }
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('ProjectListController', function(stats) {
  var cnt = this;
  cnt.stats = stats;
})
 

 
;
