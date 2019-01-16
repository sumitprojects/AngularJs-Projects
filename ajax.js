var demo = angular.module('demo', []);

demo.controller('demo1', ['$scope', '$http', function($scope, $http) {
    $scope.getdata = function() {
        $http({ url: 'script/data.json', method: 'get' }).then(
            function success(response) {
                $scope.employees = response.data;
                $log.log(response.data);
            },
            function error(response) {
                $scope.employees = response.data;
                $log.error(response.data);
            }
        );
    };
}]);