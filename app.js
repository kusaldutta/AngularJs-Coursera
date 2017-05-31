(function (){
  var resultMessage;
  'use strict'
  angular.module("LunchApp",[])
      .controller("LunchController", function($scope){

      $scope.lunchItem = "";
      //LunchController.$inject = ['$scope'];


      $scope.LunchType = function(){
        var result = "";
        $scope.ResultMessage = LunchStyle($scope.lunchItem);
      }

      function LunchStyle(dishes){
        var message = "";
        if(dishes.length == 0)
          message = "Please enter data first";
        else {
          if(dishes.charAt(dishes.length - 1) == ",")
            dishes = dishes.substring(0,dishes.length - 1)

          var arrItem = dishes.split(",");

          arrItem = arrItem.filter(item => item != " ");
          arrItem = arrItem.filter(item => item != "");
          if(arrItem.length > 3)
            message = "Too much!";
          else if(arrItem.length <= 3)
            message = "Enjoy!";
        }
        return message;
      }

    });

})();
