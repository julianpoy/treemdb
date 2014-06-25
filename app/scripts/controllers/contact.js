'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('ContactCtrl', function ($scope, Contact, API_BASE) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var reqid = getUrlVars()["id"];
    $scope.contact = Contact.get({ "Id": reqid });

  });

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

