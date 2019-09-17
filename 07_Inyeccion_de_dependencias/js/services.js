'use strict';

var realTempApp = angular.module('realTempAppServices', []);

realTempApp.factory('Temp', function(){
    return{
        celsiusToFarenheit: function(temp){
            var tempInFarenheit = 0.0;
            var tempInCelsius = temp;

            tempInFarenheit = tempInCelsius * 9/5 +32;
            return tempInFarenheit;
        },
        celsiusToKelvin: function(temp){
            var tempInKelvin = 0.0;
            var tempInCelsius = temp;

            tempInKelvin = tempInCelsius - 273.15;
            return tempInKelvin
        }
    };
});
