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
      if(typeof user.Prefix == 'undefined'){
        user.Prefix = "";
      }
      if(typeof user.FirstName == 'undefined'){
        user.FirstName = "";
      }
      if(typeof user.LastName == 'undefined'){
        user.LastName = "";
      }
      if(typeof user.Company == 'undefined'){
        user.Company = "";
      }
      if(typeof user.Title == 'undefined'){
        user.Title = "";
      }
      if(typeof user.HomePhone == 'undefined'){
        user.HomePhone = "";
      }
      if(typeof user.WorkPhone == 'undefined'){
        user.WorkPhone = "";
      }
      if(typeof user.CellPhone == 'undefined'){
        user.CellPhone = "";
      }
      if(typeof user.Fax == 'undefined'){
        user.Fax = "";
      }
      if(typeof user.Email == 'undefined'){
        user.Email = "";
      }
      if(typeof user.WebAddress == 'undefined'){
        user.WebAddress = "";
      }
      if(typeof user.Address1 == 'undefined'){
        user.Address1 = "";
      }
      if(typeof user.Address2 == 'undefined'){
        user.Address2 = "";
      }
      if(typeof user.City == 'undefined'){
        user.City = "";
      }
      if(typeof user.StateRegion == 'undefined'){
        user.StateRegion = "";
      }
      if(typeof user.Zip == 'undefined'){
        user.Zip = "";
      }
      if(typeof user.Country == 'undefined'){
        user.Country = "";
      }
      if(typeof user.AdditionalInfo == 'undefined'){
        user.AdditionalInfo = "";
      }
      if(typeof user.Notes == 'undefined'){
        user.Notes = "";
      }
      if(typeof user.CurbSideNotes == 'undefined'){
        user.CurbSideNotes = "";
      }

      $scope.result = Contact.save(user, function(){
        alert("Contact added to the database successfully.");
        $scope.go("/#/contact?id=" + $scope.result.id)
      });
    }
}
