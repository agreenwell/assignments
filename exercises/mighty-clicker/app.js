angular.module("clickApp", [])
    .controller("myController", ['$scope', 'redService', 'blueService', function ($scope, redService, blueService) {

        $scope.blueClick = function (blue, red) {
            var newBlue = blueService.blueIncrement(blue);
            var newRed = redService.redDecrement(red);
            if (newRed === 0) {
                newRed = redService.redReset(red);
            }
            $scope.blueCount = newBlue;
            $scope.redCount = newRed;
        }
        $scope.redClick = function (red, blue) {
            var newRed = redService.redIncrement(red);
            var newBlue = blueService.blueDecrement(blue);
            if (newBlue === 0) {
                newBlue = blueService.blueReset(blue);
            }
            $scope.redCount = newRed;
            $scope.blueCount = newBlue;
        };

}]);