var app =  angular.module('mainApp',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/link', {
      controller: 'LayarCtrl',
      templateUrl: 'templates/layar.htm'
    })
    .when('/home', {
      controller: '',
      templateUrl: 'templates/cv.htm'
    })
    .when('/mobile', {
      controller: '',
      templateUrl: 'templates/mobile.htm'
    })
    .when('/ksulo', {
      controller: 'KsuloCtrl',
      templateUrl: 'templates/ksulo.htm'
    })
    .otherwise({
      redirectTo: 'home'
    });
});
