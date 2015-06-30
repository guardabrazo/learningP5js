var app = angular.module("p5App", ["ngRoute", "angularUtils.directives.dirPagination"]);  

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/examples/:id', { 
      controller: 'DetailController', 
      templateUrl: 'views/detail.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
