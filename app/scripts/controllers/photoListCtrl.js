'use strict';


angular.module('fashionBlogApp')
  .controller('photoListCtrl',['$scope', 'dataFactory', function ($scope, dataFactory) {
     // var self = this;
    var justifyImages = function () {
        var photoList = $("#photoList");
        console.log("photoList justifiedGaller", photoList);
        photoList.justifiedGallery();
    } 
    
    var success = function(response)
    {
       console.log("success", response);
       $scope.images = response.hits;
       //justifyImages();
    };
    var error = function(error)
    {
        console.log(error);
    };
    
    var getFlickrImages = function(){
            console.info("calling");
           dataFactory.getFlickrImages().then(success, error);
           
                       
    }
    getFlickrImages();
  }]);
