var app = angular.module("MyApp", [])

app.controller("MainController", function($scope) {
    $scope.test = "Jimmy";
    
    $scope.array = [1, 2, 3, 4];
    
    $scope.person = {
        firstName: "John",
        lastName: "Smith"
    };
    
})