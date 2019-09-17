'use strict';

var realTempApp = angular.module('realTempAppControllers', []);

realTempApp.controller('tempController', function($scope, Temp){
    $scope.tempInCelsius = 0.0;
    $scope.resultInFarenheit = 0.0;
    $scope.resultInKelvin = 0.0;

    $scope.convertTemperatures = function(){
        $scope.resultInFarenheit = Temp.celsiusToFarenheit($scope.tempInCelsius);
        $scope.resultInKelvin = Temp.celsiusToKelvin($scope.tempInCelsius);
    }
});
