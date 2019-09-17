'use strict';

var weatherApp = angular.module('weatherApp', [
    'weatherAppControllers'
]).directive('ngWeather', function(){
    return{
        restrict: 'A',
        scope: {
            getCity: '='
        },
        template:   '<h1 class="title forecast-font">El clima en: {{getCity.name}}</h1>' +
                    '<div class="title">' +
                        '<div class="normal-font">' +
                            '<ul class="cast">' +
                            '<span class="danger-font">Coordenadas</span>' +
                            '<dl>' +
                                '<dt>latitud:</dt>' +
                                '<dd>{{weather.coord.lat}}</dd>' +
                                '<dt>longitud:</dt>' +
                                '<dd>{{weather.coord.lon}}</dd>' +
                            '</dl>' +
                            '<span class="dagenr-font">Información</span>' +
                            '<dl>' +
                                '<dt>País:</dt>' +
                                '<dd>{{weather.sys.country}}</dd>' +
                            '</dl>' +
                            '<span class="danger-font">Clima:</span>' +
                            '<dl>' +
                                '<dt>Descriptión:</dt>' +
                                '<dd>{{weather.weather[0].description}}</dd>' +
                            '</dl>' +
                            '<span class="danger-font">Temperaturas y humedad:</span>' +
                            '<dl>' +
                                '<dt>Temperatura promedio:</dt>' +
                                '<dd>{{weather.main.temp}} ºC</dd>' +
                                '<dt>Temperatura máxima:</dt>' +
                                '<dd>{{weather.main.temp_max}} ºC</dd>' +
                                '<dt>Temperatura mínima:</dt>' +
                                '<dd>{{weather.main.temp_min}} ºC</dd>' +
                                '<dt>Humedad::</dt>' +
                                '<dd>{{weather.main.humidity}} ºC</dd>' +
                                '<dt>Presión atmosférica:</dt>' +
                                '<dd>{{weather.main.pressure}} ºC</dd>' +
                            '</dl>' +
                            '<span class="danger-font">Viento:</span>' +
                            '<dl>' +
                                '<dt>Velocidad:</dt>' +
                                '<dd>{{weather.wind.speed}} m/s</dd>' +
                            '</dl>' +
                        '</ul>' +
                    '</div>' +
                '</div>',
        controller:['$scope', '$http', '$interval', function($scope, $http, $interval){
            var url = "http://api.openweathermap.org/data/2.5/weather?id=";
            $scope.getWeather = function(cityCode){
                var lang = '&lang=es';
                var metric = '&units=metric';
                var apiId = '&APPID=c6528db8ebe8907ab72ffd75891061ee';
                var full_url = url + cityCode + lang + metric + apiId;

                $http.get(full_url)
                .success(function(data, status, headers, config){
                    $scope.weather = data;
                }).error(function(data, status, headers, config) {
                    $scope.weather = "No se encontró el clima.";
                });
            };
        }],
        link: function(scope, iElement, iAttrs, ctrl){
            scope.getWeather(scope.getCity.code);
        }
    };
});
