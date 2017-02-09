var app = angular.module("myApp", [])

app.controller("MainController", function($scope) {
    $scope.test = "Aaron";
    
    $scope.array = [1, 2, 3, 4];
    
    $scope.person = {
        myName: ""
    };
    
})