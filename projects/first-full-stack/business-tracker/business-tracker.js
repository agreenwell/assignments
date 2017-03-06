angular.module("myApp")

.controller("BusinessTrackerController", function($scope, apiService){
    $scope.test="Business Tracker Works!"
    apiService.getBusinessTracker().then(function(response){
        $scope.events = response
        console.log(response)
    })
})

