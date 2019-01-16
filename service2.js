var demo = angular.module('demo', []);
demo.service('dataService', ['$http', '$log', function($http, $log) {
    this.getData = function(cb) {
        $http({ url: 'script/data.json', method: 'get' }).then(
            function success(response) {
                // $log.log(response.data);
                cb(response.data);
            },
            function error(response) {
                $log.error("Error in API call.");
            }
        );
    };
}]);

demo.controller('demo1', ['$scope', 'dataService', function($scope, dataService) {
    $scope.getData = dataService.getData(function(r) {
        $scope.employees = r;
    });
}]);