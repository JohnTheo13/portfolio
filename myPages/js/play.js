
app.controller('HboCtrl', ['$scope', '$http', function($scope, $http, GetMovieData) {
    $scope.data = [
        { block: "A", available: true, price: 5.00, value: "HBO Shows", choosen: false },
        { block: "A", available: true, price: 5.00, value: "Other Premium shows", choosen: false },
        { block: "B", available: false, price: 4.00, value: "Blockbusters International", choosen: false },
        { block: "B", available: false, price: 4.50, value: "Blockbusters Spanish", choosen: false },
        { block: "B", available: false, price: 3.00, value: "Other titles", choosen: false },
        { block: "C", available: false, price: 3.00, value: "Shows direcct", choosen: false },
        { block: "C", available: false, price: 2.50, value: "Shows catalog", choosen: false },
        { block: "C", available: false, price: 1.50, value: "Movies direct", choosen: false },
        { block: "C", available: false, price: 1.00, value: "Movies catalog", choosen: false },
        { block: "D", available: false, price: 4.00, value: "HBO GO", choosen: false },
        { block: "D", available: false, price: 2.50, value: "HBO On Demand", choosen: false },
        { block: "D", available: false, price: 1.50, value: "3 TV channels", choosen: false }
    ]


    $scope.check = function(index) {
        $scope.data[index].choosen = !$scope.data[index].choosen
        $scope.data = update($scope.data)
        $scope.total = total($scope.data)
    }

    $scope.sign = function(bool) {
        return bool ? 'minus.png' : 'plus.png'
    }
    $scope.original = angular.copy($scope.data);

    $scope.clean = function() {
        $scope.data = angular.copy($scope.original);
        $scope.total = 0
    };

    $scope.total = total($scope.data)

    //star part

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    $scope.init = function() {
            $scope.img = new Image();
            $scope.img.src = './images/star-with-transparent-bg.png';
            $scope.img.onload = function() {
                ctx.drawImage($scope.img, 0, 0);
                $scope.img.style.display = 'none';
                $scope.imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                $scope.d = $scope.imageData.data;
            };
        }

        $scope.sliderValue = 0
        $scope.inputValue = $scope.sliderValue

        $scope.velocityChange = function() {

            var sliderValue = parseInt($scope.sliderValue)
            $scope.inputValue = calculateSlider(sliderValue)
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var d = imageData.data;

            if ($scope.inputValue > 0) {
                for (var i = 0; i < d.length; i += 4) {
                    d[i + 1] = $scope.d[i + 1] * ((100 - $scope.inputValue) / 100); // green
                    d[i + 2] = $scope.d[i + 2] * ((100 - $scope.inputValue) / 100); // blue
                }
            } else {
                for (var i = 0; i < d.length; i += 4) {
                    d[i] = $scope.d[i] * ((100 + $scope.inputValue) / 100); // red
                    d[i + 1] = $scope.d[i + 1] * ((100 + $scope.inputValue) / 100); // green
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }

        $scope.inputChange = function() {
            var input = parseInt($scope.inputValue)
            if (input > -301 && input < 101) {
                $scope.sliderValue = calulateInput(input)
                $scope.velocityChange()
            } else {
                window.alert('Value out of range')
                $scope.sliderValue = $scope.inputValue = 0
                ctx.putImageData($scope.imageData, 0, 0);
            }
        }


    //$scope.title = 'The Matrix'

    // $scope.findMovie = function() {
    //     GetMovieData.movieData($scope.title, function(data) {
    //         $scope.size = Object.keys(data).length > 2
    //         $scope.response = data
    //     })
    // }
}])

// app.service('GetData', ['$http', function($http) {
//     this.movieData = function(title,callbackFunc) {
//         $http.get('http://www.omdbapi.com/?t=' + title +'&type=movie').
//         success(function(data) {
//             var data = angular.fromJson(data);
           
//             // console.log(data); 
//             return callbackFunc(data);
//             // or depends what you need testArr[0] = data.images;
//         }).
//         error(function(data) {
//             console.log('fffff'); // log error
//         });
//     }
// }]);



function total(array) {
    var total = 0.0
    for (i in array) {
        if (array[i].choosen) {
            total = total + array[i].price
        }
    }
    return total
}

function update(array) {
    var arrayA = []
    var arrayB = []
    var arrayC = []
    for (i in array) {
        switch (array[i].block) {
            case 'A':
                if (array[i].choosen) {
                    arrayA.push(i)
                }
                break;
            case 'B':
                if (array[i].choosen) {
                    arrayB.push(i)
                }
                break;
            case 'C':
                if (array[i].choosen) {
                    arrayC.push(i)
                }
                break;
            default:
                continue;
        }
    }

    if (arrayA.length > 0) {
        array[2].available = true
        array[3].available = true
        array[4].available = true
        if (arrayB.length > 0) {
            array[5].available = true
            array[6].available = true
            array[7].available = true
            array[8].available = true
            if (arrayC.length > 0) {
                array[9].available = true
                array[10].available = true
                array[11].available = true
            } else {

                for (var i = 9; i < array.length; i++) {
                    array[i].choosen = false
                    array[i].available = false
                }
            }
        } else {
            for (var i = 5; i < array.length; i++) {
                array[i].choosen = false
                array[i].available = false
            }
        }
    } else {

        for (var i = 2; i < array.length; i++) {
            array[i].choosen = false
            array[i].available = false
        }
    }



    return array
}

function calculateSlider(val) {
    if (val > 0) {
        return val;
    } else {
        return Math.round(val / 3);
    }
}

function calulateInput(input) {
    if (input > 0) {
        return input
    } else {
        return Math.round(input * 3)
    }
}
