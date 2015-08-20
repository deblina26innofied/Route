"use strict";

angular.module("formApp")
    .controller("listControl", function($scope, myFactory) {
        $scope.listEmployee = myFactory.getEmployee();
    });
