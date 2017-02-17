angular.module("myApp", ["ngRoute"])

.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"earthquakes/earthquakes.html",
        controller: "EarthquakeController"
    })
    .when("/major-cities", {
        templateUrl:"major-cities/major-cities.html",
        controller: "MajorCitiesController"
    })
    .when("/lat-and-long", {
        templateUrl:"lat-and-long/lat-and-long.html",
        controller: "LatAndLongController"
    })
})
