angular.module('cntApp', ['ui.bootstrap']).controller('ProgressBar', function ($scope,$interval) {

  $scope.callAtInterval = function() {

    var one_day_ms = (1000 * 3600 * 24);
    var budget = 2000;
    var budget_rounding = 50;
    
    //curent time
    var now_date = new Date();
    // next restart
    var next_date = new Date(); 

    next_date.setDate(20); //end_date
    next_date.setHours(18,00); //end_date hours and minutes
    
    // check and increment month
    if (now_date.getTime() > next_date.getTime()){
      // move next_date to next month
      if (next_date.getMonth() < 11) {
        next_date.setMonth(next_date.getMonth()+1);
      } else {
        next_date.setMonth(0);
        next_date.setYear(next_date.getYear()+1);
      }
    }
    
    // prevvious restart
    var prev_date = new Date(next_date.getTime()); //previos restart
    
    // decrement a month
    if (next_date.getMonth() > 1) {
      prev_date.setMonth(prev_date.getMonth()-1);
    } else {
      prev_date.setMonth(11);
      prev_date.setYear(prev_date.getYear()-1);
    }
    
    // Compute delat dates
    var remain_time = Math.abs(next_date.getTime() - now_date.getTime());
    var restart_time = Math.abs(next_date.getTime() - prev_date.getTime());
    
    // Days percentage - progrss bar values
    //$scope.days_p_precise = Math.floor(100*100*remain_time/restart_time)/100;
    $scope.days_p = Math.floor((one_day_ms*100*remain_time/restart_time)/one_day_ms);
    
    // days remiang[%]
    $scope.days = Math.floor(remain_time/one_day_ms);

    //compute amount
    var remain = budget - ((restart_time - remain_time)*budget/restart_time);
    $scope.amount = budget_rounding*Math.ceil(remain/budget_rounding); // rounded
    
    // Time untill the above(non precise) will change (%)
    var next_time = new Date(now_date.getTime()); 
    next_time.setHours(18,0,0,0); // 18:00:00:000
    var remain_time_p;
    if (now_date.getTime() > next_time.getTime()) {
      remain_time_p = one_day_ms - Math.abs(next_time.getTime() - now_date.getTime());
    } else {
      remain_time_p = Math.abs(next_time.getTime() - now_date.getTime());
    }

    var num = remain_time_p/(1000*3600);
    $scope.days_precise = num.toFixed(4);
    
    var day_remain = (budget/restart_time)*(num/one_day_ms);
    $scope.amount_precise = day_remain.toFixed(2); //four digits

    $scope.days_p_precise = Math.floor(100*remain_time_p/one_day_ms); 
  }

  $interval( function(){ $scope.callAtInterval(); }, 100);

});
