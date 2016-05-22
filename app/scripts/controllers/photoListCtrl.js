'use strict';


angular.module('fashionBlogApp')
  .controller('photoListCtrl',['$scope', 'dataFactory', function ($scope, dataFactory) {
     // var self = this;
     $scope.showImages = false;
    
    var success = function(response)
    {
       console.log("success", response);
       $scope.images = response.hits;
       
    };
    var error = function(error)
    {
        console.log(error);
    };
    
    var getFlickrImages = function(){
            console.info("calling");

            $scope.showImages = false;
           dataFactory.getFlickrImages().then(success, error);
           
                       
    }
    getFlickrImages();
  }]);
