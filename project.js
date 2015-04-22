angular.module('cntApp', [])
  .controller('CntController', function() {
    var cnt = this;
    cnt.stats = [
      {text:'tbd', value:'not computed'}];
 
    cnt.compute = function() {
       var current_date = new Date().getDate();
      
      var remain = Math.abs(text:cnt.end - current_date)*text:cnt.rate + text:cnt.start;
      
      cnt.stats.push({text:'Remaining', value:remain});
      // clean-up / update
      cnt.start = '';
      cnt.end = '';
      cnt.rate = '';
      
    };
 
  });
