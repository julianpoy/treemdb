'use strict';

/**
 * @ngdoc function
 * @name treeMdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the treeMdbApp
 */
angular.module('treeMdbApp')
  .controller('AdvancedSearchCtrl', function ($scope, API_BASE, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }

    $scope.user = {};
    $scope.user.Absolute = "0";
    $scope.user.YMT = "";
    $scope.user.YouthDirector = "";
    $scope.user.Board = "";
    $scope.user.APT = "";
    $scope.user.TreeGuardian = "";
    $scope.user.FosterCare = "";
    $scope.user.Volunteer = "";
    $scope.user.Small = "";
    $scope.user.Tall = "";

    $scope.search = function() {

      var search = {};

        // Create the http post request
        // the data holds the keywords
        // The request is a JSON request.
        if(!$scope.FirstName){
            search.FirstName = "";
        } else {
            search.FirstName = $scope.FirstName;
        }
        if(!$scope.LastName){
            search.LastName = "";
        } else {
            search.LastName = $scope.LastName;
        }
        if(!$scope.Company){
            search.Company = "";
        } else {
            search.Company = $scope.Company;
        }
        if(!$scope.Address1){
            search.Address1 = "";
        } else {
            search.Address1 = $scope.Address1;
        }
        if(!$scope.Email1){
            search.Email1 = "";
        } else {
            search.Email1 = $scope.Email1;
        }
        if(!$scope.Phone1){
            search.Phone1 = "";
        } else {
            search.Phone1 = $scope.Phone1;
        }
        if(!$scope.City){
            search.City = "";
        } else {
            search.City = $scope.City;
        }

        //Absolute search, no fuzzy
        search.Absolute = $scope.user.Absolute;

        //Flags
        search.YMT = $scope.user.YMT;
        search.YouthDirector = $scope.user.YouthDirector;
        search.Board = $scope.user.Board;
        search.APT = $scope.user.APT;
        search.TreeGuardian = $scope.user.TreeGuardian;
        search.FosterCare = $scope.user.FosterCare;
        search.Volunteer = $scope.user.Volunteer;
        search.Small = $scope.user.Small;
        search.Tall = $scope.user.Tall;

        search.query = "submitq";
        if ($scope.FirstName || $scope.LastName || $scope.Company || $scope.Address1 || $scope.Email1 || $scope.Phone1 || $scope.City){
            search.Random = Math.random();
            var searchJSON = search;

            $scope.go("/#/" + obj_to_query(searchJSON));
            //$scope.contacts = ContactSearch.search({ "query": "submitq", "FirstName": FirstName, "LastName": LastName, "Address1": Address1, "Email1": Email1, "Phone1": Phone1, "City": City });
        }

    }

  });

function obj_to_query(obj) {
    var parts = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return "?" + parts.join('&');
}
