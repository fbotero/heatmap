'use strict';

angular.module('dashboardApp')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        // AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.flag === "true") {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/dashboard');
                } else {
                    // $scope.error = response.message;
                    $scope.error = 'Username or password is incorrect';
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
