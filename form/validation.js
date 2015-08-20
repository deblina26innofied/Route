"use strict";

angular.module("formApp", [])
    .controller("Ctrl", function($scope, myFactory) {
        $scope.mail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
        $scope.validName = /^[A-z]+$/;
        $scope.validDesignation = /^[A-z]+$/;

        $scope.addEmployee = function() {

            if ($scope.formValid.$invalid) {
                $scope.submitted = 0;
            } else {
                $scope.submitted = 1;
                //myService.setEmployee();
                myFactory.getEmployee().push({

                    id: $scope.employee_id,
                    name: $scope.employee_name,
                    email: $scope.employee_email,
                    age: $scope.employee_age,
                    gender: $scope.employee_gender,
                    designation: $scope.employee_designation
                });
            }


        }; //add employee function ends

    })

.factory("myFactory", function() {


    var employee = [{

        id: "In111",
        name: "Rajesh",
        email: "rajesh123@gmail.com",
        age: "23",
        gender: "male",
        designation: "engineer"
    }];

    return {
        getEmployee:function() {
            return employee;
        }
    };
});
