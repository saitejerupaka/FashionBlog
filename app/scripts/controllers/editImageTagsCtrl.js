'use strict';

/**
 * @ngdoc function
 * @name fashionBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fashionBlogApp
 */
angular.module('fashionBlogApp')
  .controller('editImageTagsCtrl', ['$scope','$compile', function ($scope, $compile) {

  	$scope.textArea = '';
	var count = 0;
    var writeMessage = function(message, X, Y )
    {
    	$scope.textArea = message;
    	var wrapper = $('#imageWrapper');
    	var style = 'top:' +  (Y-5) +'px;left:'  + (X-5) + 'px';
    	count++;
    	var addTag = "<div id='" + count + "' class='tag' style="+ style +">"+count +"</div>";
    	var newElement = $compile( addTag)( $scope );
    	wrapper.append( newElement );
    }

    $scope.getMousePos = function(e) {
    	var element = event.currentTarget;
        var parentOffset = $(element).parent().offset(); 
        var x = e.pageX - element.offsetLeft - parentOffset.left;
    	var y = e.pageY - element.offsetTop - parentOffset.top;
    	console.log("x:",x, "y:", y);
    	var message = 'Mouse position: ' + x + ',' + y;
    	writeMessage(message, x, y);
      }
  }]);