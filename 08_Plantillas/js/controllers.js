'use strict';

var carListApp = angular.module('carListAppController', []);
carListApp.controller('ListController', function($scope){
    $scope.appTitle = "CarList App 2017";
    $scope.formHeader = "Agregar un carro a tu increíble lista";
    $scope.deleteText = "Eliminar";
    $scope.addText = "Agregar";
    $scope.formTextBrand = "Marca";
    $scope.formTextYear = "Año";

    $scope.brand;
    $scope.year;

    $scope.cars = [
        {
            brand: 'Brand 1',
            year: '2011'
        },
        {
            brand: 'Brand 2',
            year: '2012'
        },
        {
            brand: 'Brand 3',
            year: '2013'
        },
        {
            brand: 'Brand 4',
            year: '2014'
        },
        {
            brand: 'Brand 5',
            year: '2015'
        },
        {
            brand: 'Brand 6',
            year: '2016'
        },
        {
            brand: 'Brand 7',
            year: '2017'
        }
    ];

    $scope.addCar = function(){
        var car = {
            brand: $scope.brand,
            year: $scope.year
        };
        $scope.cars.push(car);
    };

    $scope.deleteCar = function(idx){
        $scope.cars.splice(idx, 1);
    };
});
