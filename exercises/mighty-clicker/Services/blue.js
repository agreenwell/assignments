angular.module("clickApp")

.service("blueService", [function () {
    var blueCounter = 100;
    this.blueIncrement = function () {
        return blueCounter++;
    }
    this.blueDecrement = function () {
        if (blueCounter === 0) {
            return blueCounter = 100;
        } else {
            return blueCounter--;
        }
    }

}])