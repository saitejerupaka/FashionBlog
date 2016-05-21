'use strict';
// var app = angular.module('fashionBlogApp',[]);

angular.module('fashionBlogApp').directive('justified', ['$timeout',function ($timeout) {
  return {
   restrict: 'AE',
        link: function (scope, el, attrs) {
            scope.$watch('$last', function (n, o) {
                if (n) {
                    $timeout(function () { $(el[0]).justifiedGallery({
                            lastRow : 'hide', 
                            rowHeight : 150, 
                            margins : 3
                        })
                    // ).on('jg.complete', function () {
                    //     console.log("swipebox",el);
                    //     $(el[0]).swipebox();
                    // });
                 });
                }
            });
        }
      };
    }]);