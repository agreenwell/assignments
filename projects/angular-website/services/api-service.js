angular.module("myApp")

.service("apiService", function($http){
   
    var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=40&longitude=-111&maxradius=2"
    
    this.getEarthquakes=function(){
        return $http.get(url).then(function(response){
            return response.data.features
            console.log(response)
        })
    }
})