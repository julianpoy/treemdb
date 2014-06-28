'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('MainCtrl', function ($scope, Contact, API_BASE, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var urlvars = $location.search();
    $scope.urlvars = urlvars;
    
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }
  });

function ContactsDisplayCtrl($scope, Contact, ContactSearch, API_BASE){

    if(!($scope.urlvars.query === "submitq")){
        $scope.contacts = {contacts: [{"FirstName": "Please submit a coarse search first"}]};
    } else {
        $scope.FirstName = $scope.urlvars.FirstName;
        $scope.LastName = $scope.urlvars.LastName;
        $scope.Company = $scope.urlvars.Company;
        $scope.Address1 = $scope.urlvars.Address1;
        $scope.Email1 = $scope.urlvars.Email1;
        $scope.Phone1 = $scope.urlvars.Phone1;
        $scope.City = $scope.urlvars.City;

        $scope.contacts = ContactSearch.search($scope.urlvars);
    }
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
    // The function that will be executed on button click (ng-click="search()")
    $scope.search = function() {
    
        // Create the http post request
        // the data holds the keywords
        // The request is a JSON request.
        if(!$scope.FirstName){
            var FirstName = "";
        } else {
            var FirstName = $scope.FirstName;
        }
        if(!$scope.LastName){
            var LastName = "";
        } else {
            var LastName = $scope.LastName;
        }
        if(!$scope.Company){
            var Company = "";
        } else {
            var Company = $scope.Company;
        }
        if(!$scope.Address1){
            var Address1 = "";
        } else {
            var Address1 = $scope.Address1;
        }
        if(!$scope.Email1){
            var Email1 = "";
        } else {
            var Email1 = $scope.Email1;
        }
        if(!$scope.Phone1){
            var Phone1 = "";
        } else {
            var Phone1 = $scope.Phone1;
        }
        if(!$scope.City){
            var City = "";
        } else {
            var City = $scope.City;
        }

        if ($scope.FirstName || $scope.LastName || $scope.Company || $scope.Address1 || $scope.Email1 || $scope.Phone1 || $scope.City){
            var RandomRefresh = Math.random();;
            var searchJSON = { "query": "submitq", "FirstName": FirstName, "LastName": LastName, "Company": Company, "Address1": Address1, "Email1": Email1, "Phone1": Phone1, "City": City, "Random": RandomRefresh }

            $scope.go("/#/" + obj_to_query(searchJSON))
            //$scope.contacts = ContactSearch.search({ "query": "submitq", "FirstName": FirstName, "LastName": LastName, "Address1": Address1, "Email1": Email1, "Phone1": Phone1, "City": City });
        }
    };   
}

function obj_to_query(obj) {
    var parts = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return "?" + parts.join('&');
}
