angular.module("myApp")

.controller("EarthquakeController", function($scope, apiService){
    $scope.test="Earthquakes are rad"
    apiService.getEarthquakes().then(function(response){
        $scope.events = response
        console.log(response)
    })
})