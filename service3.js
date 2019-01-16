var demo = angular.module('demo', []);
demo.provider('dataService', function() {
    var baseURL = '';
    this.config = function(url) {
        baseURL = url;
    };
    this.$get = ['$http', '$log', function($http, $log) {
        var oDataService = {};
        oDataService.getData = function(cb) {
            $http({ url: baseURL, method: 'get' }).then(
                function success(response) {
                    // $log.log(response.data);
                    cb(response.data);
                },
                function error(response) {
                    $log.error("Error in API call.");
                }
            );
        }
        return oDataService;
    }];
});
demo.config(["dataServiceProvider", function(dataServiceProvider) {
    dataServiceProvider.config('script/data.json');
}]);
demo.controller('demo1', ['$scope', 'dataService', function($scope, dataService) {
    $scope.getData = function() {
        dataService.getData(function(r) {
            $scope.employees = r;
        });
    };
}]);