var app =  angular.module('mainApp',['ngRoute','ngMap']);

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
    .when('/map', {
      controller: '',
      templateUrl: 'templates/map.html'
    })
    .when('/images', {
      controller: '',
      templateUrl: 'templates/dashtest2.htm'
    })
    .when('/angularPlay',{
      controller:'HboCtrl',
      templateUrl:'templates/HBO.htm'
    })
    .when('/react',{
      controller:'',
      template:''
    })
    .otherwise({
      redirectTo: '/home'
    });
});
