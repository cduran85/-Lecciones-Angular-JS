'use strict';

var carAppControllers = angular.module('carAppControllers', []);

/*http
carAppControllers.controller('carListCtrl', ['$scope', 'Car', '$http',
    function($scope, Car, $http){
        $http.get('cars/cars.json').success(function(data){
            $scope.cars = data;
        });
    }
]);*/

carAppControllers.controller('carListCtrl', ['$scope', 'Car',
    function($scope, Car){
            $scope.cars = Car.query();
            $scope.orderProp = 'model';
    }
]);

carAppControllers.controller('carDetailCtrl', ['$scope', '$routeParams', 'Car',
    function($scope, $routeParams, Car){
        /*$scope.carid = $routeParams.carId;*/

        $scope.car = Car.get({carId: $routeParams.carId}, function(car){
            $scope.mainImageUrl = car.images[0];
        });
        $scope.setImage = function(imagenUrl){
            $scope.mainImageUrl = imagenUrl;
        }
    }
]);
