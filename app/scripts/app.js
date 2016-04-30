'use strict';

/**
 * @ngdoc overview
 * @name fashionBlogApp
 * @description
 * # fashionBlogApp
 *
 * Main module of the application.
 */
angular
  .module('fashionBlogApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/editImageTags.html',
        controller: 'editImageTagsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
