app.controller('MainController', ['$scope', 'examples', function($scope, examples) { 
  
  $scope.title = 'p5.js'; 

  examples.success(function(data) { 
    $scope.examples = data; 
  });
}]);

