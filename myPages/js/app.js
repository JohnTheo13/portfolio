var app=angular.module('Layar',[]);

app.controller('MainCtrl',['$scope','getData',function($scope,getData){
	getData.success(function(data){
	$scope.fdata=data;
	$scope.adata=[];
      for (var i = 0; i< $scope.fdata.images.length; i++) {
          $scope.adata.push($scope.fdata.images[i]);
      }
	});
}]);