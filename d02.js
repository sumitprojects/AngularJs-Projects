var demo = angular.module('demo', []);

demo.controller('demo1', ['$scope', function($scope) {
    $scope.value1 = 10;
    $scope.square = function() {
        $scope.value1 = $scope.value1 * 10;
        $scope.sum = parseInt($scope.value1) * parseInt($scope.value1);
        return $scope.sum;
    };
}]);