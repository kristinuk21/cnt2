angular.module('cntApp', [])
  .controller('CntController', function() {
    var cnt = this;
    cnt.stats = [
      {text:'tbd', value:'not computed'}];
 
    cnt.compute = function() {
       //var current_date = new Date().getDate();
       
       if (text:cnt.end == ''){
         cnt.end = 20;
       } else {
         cnt.end = text:cnt.end;
       }
       
       if (text:cnt.start == ''){
         cnt.start = 2000;
       } else {
         cnt.start = text:cnt.start;
       }
       
      if (text:cnt.rate == ''){
         cnt.rate = -2000/31;
       } else {
         cnt.rate = text:cnt.rate;
       }
      
      //var remain = Math.abs(cnt.end - current_date)*cnt.rate + cnt.start;
      var remain = cnt.end  + "|" + current_date  + "|" + cnt.rate  + "|" + cnt.start;
      //var remain =2;
      cnt.stats.push({text:'Remaining', value:remain});
      // clean-up / update
      cnt.start = '';
      cnt.end = '';
      cnt.rate = '';
      
    };
 
  });
