'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('DeletecontactCtrl', function ($scope, Contact, API_BASE, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }
    
    var urlvars = $location.search();
    $scope.urlvars = urlvars;

  });

function Controller($scope, Contact) {
  $scope.contact = Contact.get({ "Id": $scope.urlvars.id });

  $scope.delete = function() {
    $scope.results = Contact.delete({ "Id": $scope.urlvars.id });
    if(!($scope.results.length > 0)){
      alert("Contact was deleted! The browser will now navigate back to your original search.");
      window.history.go(-2);
    } else {
      alert("There was a problem deleting the contact you selected from the database. Please contact the developer.");
    }
  };
}
