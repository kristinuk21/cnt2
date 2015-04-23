angular.module('cntApp', ['ui.bootstrap']).controller('ProgressBar', function ($scope) {
  $scope.max = 100;
  days_p = Math.floor((Math.random() * 100) + 1);
  amount_p = Math.floor((Math.random() * 100) + 1);
  $scope.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);

    $scope.dynamic = value;
  };
  $scope.random();

});

 

//         cnt.end = 20;
//         cnt.start = 2000;
//         cnt.rate = -2000/31;
//      var remain = Math.abs(cnt.end - current_date)*cnt.rate + cnt.start;
