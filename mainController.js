var app = angular.module("myApp");
app.controller(
  "mainController",
  function ($scope, $rootScope, $location, $http) {
    $rootScope.title = "Stay Home Stay Safe!";
    // $scope.message = "HI There";

    init();

    const url = "https://api.covid19india.org/data.json";

    $http.get(url).then(
      (response) => {
        console.log("success");
        console.log(response);
        $scope.fdata = response.data.statewise;
        console.log($scope.fdata);
      },
      (error) => {
        console.log("error");
        console.log(error);
      }
    );
    $scope.goToLogin = function () {
      //alert("hi");
      $location.path("/login");
    };
    $scope.goToRegister = function () {
      //alert("hi");
      $location.path("/register");
    };

    function init() {
      //alert("hi");
      //   $http.get("http://localhost:3000/users").then(function (response) {
      //     console.log(response);
      //     $scope.logindetails = response.data;
      //     for (let index = 0; index < $scope.logindetails.length; index++) {
      //       $scope.logindetails[index].password = atob(
      //         $scope.logindetails[index].password
      //       );
      //     }
      //     console.log("details", $scope.logindetails);
      //   });
    }
  }
);
