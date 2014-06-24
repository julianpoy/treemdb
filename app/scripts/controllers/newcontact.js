'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('NewcontactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

function pollController($scope, Contact) {

    $scope.saveEntry = function() {
        var newcontact = new Contact();
        newcontact.name = $scope.poll.name;
        newcontact.$save();        
    }
}
