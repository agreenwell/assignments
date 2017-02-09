angular.module("clickApp")

.service("redService", [function () {
    var redCounter = 100;
    this.redIncrement = function () {
        return redCounter++;
    }
    this.redDecrement = function () {
        if (redCounter === 0) {
            return redCounter = 100;
        } else {
            return redCounter--;
        }
    }

}])