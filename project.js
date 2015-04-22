angular.module('cntApp', [])
  .controller('CntController', function() {
    var cnt = this;
    cnt.stats = [
      {text:'tbd', value:'not computed'}];
 
    cnt.compute = function() {
       //var current_date = new Date().getDate();
       /*
       if (text:cnt.end){
         cnt.end = text:cnt.end;
       } else {
         cnt.end = 20;
       }
       
       if (text:cnt.start){
         cnt.start = text:cnt.start;
       } else {
         cnt.start = 2000;
       }
       
      if (text:cnt.rate){
         cnt.rate = text:cnt.rate;
       } else {
         cnt.rate = -2000/31;
       }
      */
      //var remain = Math.abs(cnt.end - current_date)*cnt.rate + cnt.start;
      //var remain = cnt.end  + "|" + current_date  + "|" + cnt.rate  + "|" + cnt.start;
      var remain = text:cnt.end  + "|" + current_date  + "|" + text:cnt.rate  + "|" + text:cnt.start;
      //var remain =2;
      cnt.stats.push({text:'Remaining', value:remain});
      // clean-up / update
      cnt.start = '';
      cnt.end = '';
      cnt.rate = '';
      
    };
 
  });
