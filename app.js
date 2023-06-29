(function () {
  var app = angular.module("myApp", [
    "ngMaterial",
    "ngMessages",
    "ngRoute",
    // "ngAnimate",
    // "md.data.table",
    // "ngFileUpload",
    // "chart.js",
  ]);
  app.run(function ($rootScope, $location) {
    console.clear();
    console.log("running");
  });

  app.config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/login", {
          templateUrl: "login.html",
          controller: "LoginController",
        })
        .when("/register", {
          templateUrl: "reg.html",
          controller: "RegisterController",
        })
        .when("/home", {
          templateUrl: "home.html",
          controller: "HomeController",
        })
        .when("/about", {
          templateUrl: "about.html",
          controller: "AboutController",
        })
        .when("/details", {
          templateUrl: "details.html",
          controller: "DetailController",
        })
        .when("/users", {
          templateUrl: "users.html",
          controller: "UsersController",
        })
        .when("/form", {
          templateUrl: "form.html",
          controller: "formController",
        })
        .when("/", {
          templateUrl: "main.html",
          controller: "mainController",
        })
        .otherwise({
          redirectTo: "main.html",
          controller: "mainController",
        });
    },
  ]);
})();
