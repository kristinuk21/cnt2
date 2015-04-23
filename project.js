angular.module('cntApp', ['ui.bootstrap']).controller('ProgressBar', function ($scope) {
  $scope.max = 100;
  $scope.random = function() {
  var date1 = new Date();
  var date2 = new Date();
  date2.setDate(20); //end_date
  
  if (date1.getDate()  > 20){
    // move date2 to next month
    if (date2.getMonth() < 11) {
      date2.setMonth(date2.getMonth()+1);
    } else {
      date2.setMonth(0);
      date2.setYear(date2.getYear()+1);
    }
  }
  
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  $scope.days =   diffDays;
  
  var date3 = date2;
    if (date2.getMonth() > 1) {
      date2.setMonth(date2.getMonth()-1);
    } else {
      date2.setMonth(11);
      date2.setYear(date2.getYear()-1);
    }
  
  var t_timeDiff = Math.abs(date3.getTime() - date2.getTime());
  var t_diffDays = Math.ceil(t_timeDiff / (1000 * 3600 * 24)); 
  
 $scope.days_p = Math.floor(100*diffDays/t_diffDays);

  $scope.amount = 2000 - ((2000/t_diffDays)*diffDays);
  
  $scope.amount_p = Math.floor(100*amount/2000);
  };
  $scope.random();

});

 


