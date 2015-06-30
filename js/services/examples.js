app.factory('examples', ['$http', function($http) { 
  return $http.get('https://api.myjson.com/bins/tsk2') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);