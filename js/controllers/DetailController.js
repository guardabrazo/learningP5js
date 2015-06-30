app.controller('DetailController', ['$scope', 'examples', '$routeParams', function($scope, examples, $routeParams) {
  
  examples.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);