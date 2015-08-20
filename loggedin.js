'use strict';

var application = angular.module('detailsApp', ['ui.router']);

application.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/state1');
    //
    // Now set up the states
    $stateProvider
        .state('loggedin.form', {
            url: '/form',
            templateUrl: 'form/validation.html'
        })

        .state('loggedin.viewDetails', {
        url: '/viewDetails',
        templateUrl: 'details.html'
    });
});