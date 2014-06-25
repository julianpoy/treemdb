'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('MainCtrl', function ($scope, Contact, API_BASE) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var postData = "2";
    //$scope.contacts = Contact.get({Id: 2});
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
    }
  });

function ContactsDisplayCtrl($scope, Contact, API_BASE){
        $scope.contacts = Contact.query();
        $scope.sort = {
            column: '',
            descending: false
        };    
        $scope.limitquantity = 30;
        $scope.changeSorting = function(column) {

            var sort = $scope.sort;
 
            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };
        
}
