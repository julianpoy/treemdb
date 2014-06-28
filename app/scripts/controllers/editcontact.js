'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('EditcontactCtrl', function ($scope, Contact, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var urlvars = $location.search();
    $scope.urlvars = urlvars;
    

  });

function Controller66($scope, Contact) {
    $scope.contact = Contact.get({ "Id": $scope.urlvars.id });
    $scope.master = $scope.contact;
    $scope.user = $scope.contact;

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      $scope.results = Contact.update(user);
      if($scope.results.id = $scope.urlvars.id){
        alert("Changes were saved in the database!");
      } else {
        alert("There was an error saving your changes in the database. Please contact the developer.");
      }
    };

    $scope.reset = function() {
      $scope.user = Contact.get({ "Id": $scope.urlvars.id });
    };

    //$scope.reset();
  }



