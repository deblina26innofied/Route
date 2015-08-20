'use strict';
//Forward Navigation
var application = angular.module('changeForward', []);
application.controller('LogInCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.nextPage = function() {
        $state.go('loggedin');
    };
}]);
//Backward
angular.module('changeBackward', [])
    .controller('LogOutControl', ['$scope', '$state', function($scope, $state) {
        $scope.logout = function() {
            $state.go('login');
        };
    }]);

var routingApp = angular.module('myApp', ['ui.router', 'changeForward', 'changeBackward', 'detailsApp', 'formApp']);
routingApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/log_in');
    $stateProvider
        .state('login', {
            url: '/log_in',
            templateUrl: 'login.html',
            controller: 'LogInCtrl'
        })
        .state('loggedin', {
            url: '/user_page',
            templateUrl: 'loggedin.html',
            controller: 'LogOutControl'
        });

});
