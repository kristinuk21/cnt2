var myApp = angular.module('cntApp', ['ui.bootstrap']);
myApp.controller('Progress', function ($scope) {
  $scope.max = 200;

  $scope.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    $scope.showWarning = (type === 'danger' || type === 'warning');

    $scope.dynamic = value;
    $scope.type = type;
  };
  $scope.random();

  $scope.randomStacked = function() {
    $scope.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
    }
  };
  $scope.randomStacked();
});


myApp.controller('CntController', function() {
    var cnt = this;
    cnt.stats = [
      {text:'tbd', value:'not computed'}];
 
    cnt.compute = function() {
       var current_date = new Date().getDate();
       if (!cnt.end){
         cnt.end = 20;
       }
       
       if (!cnt.start){
         cnt.start = 2000;
       }
       
      if (!cnt.rate){
         cnt.rate = -2000/31;
       }

      var remain = Math.abs(cnt.end - current_date)*cnt.rate + cnt.start;
      //var remain = cnt.end  + "|" + current_date  + "|" + cnt.rate  + "|" + cnt.start;
      //var remain = cnt.end  + "|" + current_date  + "|" + cnt.rate  + "|" + cnt.start;
      //var remain =2;
      cnt.stats.push({text:'Remaining', value:remain});
      // clean-up / update
      cnt.start = '';
      cnt.end = '';
      cnt.rate = '';
      
    };
 
  });
