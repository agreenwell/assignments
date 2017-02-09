var app = angular.module("UglyApp", []);

app.controller("UglyController", ["$scope", function($scope) {
    
    $scope.ugly = []
    
    $scope.addUgly = function() {
        
        
        
        $scope.ugly.push($scope.space) 
        $scope.space = {};
    }
    
}]);