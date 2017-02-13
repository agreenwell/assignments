angular.module("clickApp")

.service("redService", [function () {
    var redCounter = 100;
    this.redIncrement = function (red) {
        red++;
        return red;
    }
    this.redDecrement = function (red) {
        if (red === 0) {
            return red = 100;
        } else {
            red--;
            return red;
        }
    }

}])
