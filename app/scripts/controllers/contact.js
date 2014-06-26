'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('ContactCtrl', function ($scope, Contact, API_BASE, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var urlvars = $location.search();
    $scope.contact = Contact.get({ "Id": urlvars.id });

  });

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       //return(false);
}


