angular.module("myApp")

.controller("MajorCitiesController", function($scope, apiService){
    $scope.test="Earthquakes in major cities"
    $scope.updateShownCity=function(lat, lon){
        
        apiService.getEarthquakes(lat, lon).then(function(response){
    $scope.earthquakes=response
    console.log(response)
    })};
                                                 
    
    $scope.locations = [
        { 
            city: "Salt Lake City, Utah", 
            lat: "40.7", 
            long: "-111.8"
        
        },
        {
            city: "Los Angeles, California",
            lat: '34.0',
            long: '-118.2'
        },
        {
            city: "Hilo, Hawaii",
            lat: '19.7',
            long: '-155.0'
        },
        {
            city: "Seattle, Washington",
            lat: '47.6',
            long: '-122.3'
        },
        {
            city: "Anchorage, Alaska",
            lat: '61.2',
            long: '-149.9'
        },
        {
            city: "Tulsa, Oklahoma",
            lat: '36.1',
            long: '-95.9'
        },
        {
            city: "Charleston, South Carolina",
            lat: '32.7',
            long: '-79.9'
        },
        {
            city: "Memphis, Tennessee",
            lat: '35.1',
            long: '-90.0'
        },
        {
            city: "Seattle, Washington",
            lat: '47.6',
            long: '-122.3'
        },
        {
            city: "Carson City, Nevada",
            lat: '39.1',
            long: '-119.7'
        },
    ]
})


