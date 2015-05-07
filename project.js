angular.module('cntApp', ['ui.bootstrap']).controller('ProgressBar', function ($scope) {
  $scope.compute = function() {
    
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
    
    //compute delat dates
    var remain_time = Math.abs(next_date.getTime() - now_date.getTime());
    var restart_time = Math.abs(next_date.getTime() - prev_date.getTime());
    
    //days percentage - progrss bar values
    $scope.days_p_precise = Math.floor(100*remain_time/restart_time);
    $scope.days_p = (one_day_ms) * Math.floor(100*remain_time/(restart_time*one_day_ms));
    
    //compute amount
    var remain = budget - ((restart_time - remain_time)*budget/restart_time);
    $scope.amount_precise = Math.floor(remain*100)/100; //two digits
    $scope.amount = budget_rounding*Math.ceil(remain/budget_rounding); // rounded

  };
  $scope.compute();

});

 


