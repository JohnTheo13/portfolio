app.factory('getData', ['$http', function($http) { 
  return   $http.get('./data/data.json').
    success(function(data) {
      var adata = angular.fromJson(data);
      var data=[];
      for (var i = 0; i< adata.images.length; i++) {
          data.push(adata.images[i]);
      }
      return data;
      // or depends what you need testArr[0] = data.images;
    }).
    error(function(data) {
      return err; // log error
    });
}]);
