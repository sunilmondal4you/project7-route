/**
 * Created by abc on 23/05/2016.
 */
var app  = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            "templateUrl" : "home.html",
            "controller" : "default"
        })

        .when("/first", {
            "templateUrl" : "first.html",
            "controller" : "first"
        })

        .when("/second", {
            "templateUrl" : "second.html",
            "controller" : "second"
        })
});

