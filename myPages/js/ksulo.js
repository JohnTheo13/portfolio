app.controller('KsuloCtrl', ['$scope', '$sce',
    function($scope, $sce) {
      $scope.ksulo = $sce.trustAsResourceUrl("http://ksulourgeio.gr");
      }
  ]);
