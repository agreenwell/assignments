angular.module("myApp")

.service("apiService", function($http){
   
   
    
    this.getEarthquakes=function(lat, lon){
         var url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${lat}&longitude=${lon}&maxradius=2`
        return $http.get(url).then(function(response){
            return response.data.features
            console.log(response)
        })
    }
})

