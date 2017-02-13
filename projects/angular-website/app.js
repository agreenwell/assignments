angular.module("myApp", ["ngRoute"])

.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"earthquakes/earthquakes.html",
        controller: "EarthquakeController"
    })
})