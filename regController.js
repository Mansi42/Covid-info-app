var app = angular.module("myApp");
app.controller(
  "RegisterController",
  function ($scope, $rootScope, $location, $http) {
    $rootScope.title = "Register Page";
    $scope.msg = "hi";
    $scope.name = "widoj";
    $scope.title = "Stay Home Stay Safe!"; //alert("test1");
    $scope.name = null;
    $scope.email = null;
    $scope.password = null;
    $scope.gender = null;
    $scope.dob = null;
    $scope.dod = null;
    $scope.address = null;
    $scope.phoneNumber = null;

    $scope.postData = function (
      name,
      email,
      password,
      gender,
      dob,
      address,
      phoneNumber
    ) {
      //alert("testyui");
      var data = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        dob: dob,
        address: address,
        phoneNumber: phoneNumber,
      };

      for (var i in data) {
        if (data.hasOwnProperty(i) && data[i] === null) {
          alert("please fill the details");
          return;
        }
        console.log("hello");
      }

      $http.post("http://localhost:3004/regUsers", JSON.stringify(data)).then(
        function (response) {
          console.log(response);
          if (response.data) {
            $scope.Name = response.data.name;
            $scope.Email = response.data.email;
            $scope.Password = response.data.password;
            $scope.Gender = response.data.gender;
            $scope.Dob = response.data.dob;
            $scope.Address = response.data.address;
            $scope.PhoneNumber = response.data.phoneNumber;
          }
          $location.path("/");
        },
        function (error) {
          console.log(error);
        }
      );
    };

    $scope.goToLogin = function () {
      //alert("hi");
      $location.path("/login");
    };
    init();

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
