'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('NewcontactCtrl', function ($scope, Contact, API_BASE, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }

  });

function NewContactController($scope, Contact) {

    $scope.add = function(user) {
      $scope.result = Contact.save(user, function(){
        alert("Contact added to the database successfully.");
        $scope.go("/#/contact?id=" + $scope.result.id)
      });
    }
}
