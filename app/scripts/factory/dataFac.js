 'use strict';

    var app = angular.module('fashionBlogApp');

    app.factory('dataFactory', ['$http', '$q', '$window', '$timeout', function($http, $q, $window, $timeout) {

        var self = this,
            baseUrl = '',
            dataFactory = {};
        var api_key = '';
        var image_params = {
            'key': api_key,
            'per_page' : 60,
            'safesearch':true,
            'editors_choice': true
            };
        dataFactory.getFlickrImages = function() {
            return get("https://pixabay.com/api",image_params);
        }
        return dataFactory;

        /* Helper Funtions */
        function get(call, params) {
            var deferred = $q.defer();
                
            $http.get(baseUrl + call, {
                    params: params
            }).
            success(function(data) {
                deferred.resolve(data);
            }).
            error(function(msg) {
                deferred.reject(msg);
            });
            
            return deferred.promise;
        }

        function post(call, params) {
            var deferred = $q.defer();
                
            $http.post(baseUrl + call, params).
            success(function(data) {
                deferred.resolve(data);
            }).
            error(function(msg) {
                deferred.reject(msg);
            });
            
            return deferred.promise;
        }
    }]);