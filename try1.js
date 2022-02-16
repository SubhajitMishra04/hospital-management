var myapp=angular.module("myapp",[]);
    myapp.controller("myctrl",function($scope,$http)
   {
       $http.get('https://subhajitmishra04.github.io/json/')
       .success(function(response)
       
       {
           $scope.names=response.records;
           $scope.rowlimit=25;
       });
   });
   myapp.filter("myfilter",function()
   {
       return function(input,option)
       {
           if(isNaN(option)||(option==""))
           {
               return input;
           }
           else {
           return input.substring(0,option).toUpperCase();
       }}
   });

    myapp.filter("myup",function()
    {
    
           return function(item){
               return item.toUpperCase();
           };
       
        });