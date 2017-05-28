var app = angular.module('myapp', []);

app.controller('ctrlForm', function($scope) {
    $scope.myNumber = 12;
    $scope.myOtherNumber = 31;
    $scope.yearsArray = [];
    $scope.getNumber = function(num) {
        return new Array(num);
    }

    for (var i = 1990; i < 2011; i++) {
        $scope.yearsArray.push(i);
    }

    $scope.url = [
	    {'url':'./images/LegoCity.png','id':'city'},
    	{'url':'./images/LegoStarWars.png','id':'star'},
    	{'url':'./images/LegoMinecraft.png','id':'craft'},
    	{'url':'./images/LegoPrincess.png','id':'princess'},
    	{'url':'./images/LegoFriends.png','id':'friends'},
    	{'url':'./images/LegoNexo.png','id':'nexo'},
    	{'url':'./images/LegoElves.png','id':'elves'},
    	{'url':'./images/LegoDuplo.png','id':'duplo'}
    ];

    $scope.mobile = [
    	'./images/mobile/mobileCity.png',
    	'./images/mobile/mobileStars.png',
    	'./images/mobile/mobileMine.png',
    	'./images/mobile/mobilePrincess.png',
    	'./images/mobile/mobileFriends.png',
    	'./images/mobile/mobileNexo.png',
    	'./images/mobile/mobileElves.png',
    	'./images/mobile/mobileDuplo.png'
    ]

});