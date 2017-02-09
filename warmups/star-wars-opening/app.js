jangular.module("starWarsCredits", [])

.controller("MainController", ["$scope", "$http", function($scope, $http) {
    
    $http.get("http://swapi.co/api/films/1/").then(function(response) {
        $scope.crawl = response.data.opening_crawl;
    });
}];
            
            