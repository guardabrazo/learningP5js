app.controller('MainController', ['$scope', 'examples', function($scope, examples) { 
  
  $scope.title = 'p5.js'; 

  examples.success(function(data) { 
    $scope.examples = data; 
    // $scope.examplesGrouped = $filter('groupBy')($scope.examples, 3);



    // Chunk Array and apply scope

  });

   
  


    // $filter = ('groupBy', function() {
    //     return function(items, groupItems) {
    //         if (items) {
    //             var newArray = [];

    //             for (var i = 0; i < items.length; i+=groupItems) {
    //                 if (i + groupItems > items.length) {
    //                     newArray.push(items.slice(i));
    //                 } else {
    //                     newArray.push(items.slice(i, i + groupItems));
    //                 }
    //             }

    //             return newArray;
    //         }
    //     };
    // });

}]);

