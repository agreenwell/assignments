angular.module("myApp")

.controller("LatAndLongController", function($scope, apiService){
    $scope.test="Lat and Long Results"
    $scope.getQuakes=function(lat, lon){
apiService.getEarthquakes(lat, lon).then(function(response){
    $scope.earthquakes=response
    console.log(response)
})
}
})
