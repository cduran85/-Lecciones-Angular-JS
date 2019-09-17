'use strict';

var carApp = angular.module('carApp', [
    'ngRoute',
    'carAppAnimations',
    'carAppControllers',
    'carAppServices'
]);

carApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/cars', {
                templateUrl: 'partials/car-list.html',
                controller: 'carListCtrl'
            }).
            when('/cars/:carId', {
                templateUrl: 'partials/car-detail.html',
                controller: 'carDetailCtrl'
            }).
            otherwise({
                redirectTo: '/cars'
            });
    }
]);
