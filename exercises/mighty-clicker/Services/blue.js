angular.module("clickApp")

.service("blueService", [function () {
    var blueCounter = 100;
    this.blueIncrement = function (blue) {
        blue++;
        return blue;
    }
    this.blueDecrement = function (blue) {
        if (blue === 0) {
            return blue = 100;
        } else {
            blue--;
            return blue;
        }
    }

}])