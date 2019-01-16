var demo = angular.module('demo', []);
demo.factory('dataFactory', ['$http', '$log', function($http, $log) {
    var oDataService = {};

    var data = '';
    oDataService.getData = function(a, b, cb) {
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
    return oDataService;
}]);

demo.controller('demo1', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.val1 = 1;
    $scope.val2 = 2;
    $scope.getData1 = function() {
        dataFactory.getData($scope.val1, $scope.val2, function(r) {
            $scope.employees = r;
        });
    };
}]);