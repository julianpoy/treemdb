'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('ContactCtrl', function ($scope, Contact, Donations, API_BASE, $location, $rootElement) {
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
    $scope.contact = Contact.get({ "Id": urlvars.id });
    $scope.donations = Donations.get({ "Id": urlvars.id });

    $scope.newdonation = function(){
      var fulldate = $scope.newdonation.year + "-" + $scope.newdonation.month + "-" + $scope.newdonation.day;

      var savedonation = { "Date": fulldate, "Amount": $scope.newdonation.amount, "Contact_id": urlvars.id };

      Donations.save(savedonation);
      location.reload();
    }

    $scope.deletedonation = function(donationamt, donationid){
      if (confirm('You are about to delete a donation record for $' + donationamt)) {
        Donations.delete({ "Id": donationid }, function(){ location.reload(); });
      } else {
        // Do nothing!
      }
    }
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


