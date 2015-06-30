app.directive('exampleInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/exampleInfo.html' 
  }; 
});