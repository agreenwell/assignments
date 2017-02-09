var app = angular.module("NameBadge", []);

app.controller("BadgeController", ["$scope", function($scope) {
    
    $scope.addName = function() {
        $scope.badge = $scope.person;
        $scope.person = {};
    }
    
}]);