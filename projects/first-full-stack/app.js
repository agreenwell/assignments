angular.module("myApp", [ngRoute])

.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"business-tracker/business-tracker.html",
        controller:"BusinessTrackerController"
    })
    .when:("/new-expenses", {
        templateUrl:"new-expenses/new-expenses.html",
        controller:"newExpensesController"
    })
    .when:("/expenses", {
        templateUrl:"expenses/expenses.html",
        controller:"expensesController"
    })
})