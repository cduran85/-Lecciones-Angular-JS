'use strict';

var moviesBDapp = angular.module('moviesBDapp', [])
.run(function ($rootScope){
    $rootScope.orderProp = "name";
    $rootScope.reverse = false;

    $rootScope.movies = [
        {
            name: 'Star Wars',
            director: 'George Lucas',
            review: 9.3,
            publishYear: 1990
        },
        {
            name: 'Pulp Fiction',
            director: 'Quenitn Tarantino',
            review: 8.9,
            publishYear: 1995
        },
        {
            name: 'Interstellar',
            director: 'Christopher Nolan',
            review: 8.9,
            publishYear: 2014
        },
        {
            name: 'The Matrix',
            director: 'Andy Wachowski',
            review: 8.7,
            publishYear: 1999
        },
        {
            name: 'City of God',
            director: 'Fernando Meirelles',
            review: 9.5,
            publishYear: 2011
        },
        {
            name: 'Forrest Gump',
            director: 'Robert Zemeckis',
            review: 8.8,
            publishYear: 2002
        },
        {
            name: 'Saving Pvt Ryan',
            director: 'Steven Spielberg',
            review: 8.6,
            publishYear: 1998
        }
    ];
});
