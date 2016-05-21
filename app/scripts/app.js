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
      .when('/',{
        templateUrl:'views/photoList.html',
        controller:'photoListCtrl'
      })
      .when('/editImage', {
        templateUrl: 'views/editImageTags.html',
        controller: 'editImageTagsCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
