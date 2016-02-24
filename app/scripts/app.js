'use strict';

var apiBase = 'https://' + window.location.hostname + '/api/';
//var apiBase = 'http://192.168.1.4/api/';

/**
 * @ngdoc overview
 * @name treeMdbApp
 * @description
 * # treeMdbApp
 *
 * Main module of the application.
 */
angular
  .module('treeMdbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //Reset headers to avoid OPTIONS request (aka preflight)
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }
  ])
  // @if DEBUG
  .constant('API_BASE', 'http://localhost:3000/')
  // @else
  .constant('API_BASE', 'https://www.kondeo.com/product/treemdb/api/')
  // @endif
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/newcontact.html',
        controller: 'NewcontactCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/editcontact.html',
        controller: 'EditcontactCtrl'
      })
      .when('/delete', {
        templateUrl: 'views/deletecontact.html',
        controller: 'DeletecontactCtrl'
      })
      .when('/advsearch', {
        templateUrl: 'views/advancedsearch.html',
        controller: 'AdvancedSearchCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
