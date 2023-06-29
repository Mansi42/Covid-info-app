var app = angular.module("myApp");
app.controller(
  "LoginController",
  function ($scope, $rootScope, $location, $http) {
    $rootScope.title = "Login Page";

    $scope.login = function (email, password) {
      // alert("sdjamijudn");

      $http.get("http://localhost:3004/regusers").then(
        function (response) {
          const users = response.data;

          const newusers = users.find(function (a) {
            return a.email === email && a.password === password;
          });

          if (newusers) {
            alert("login success");
            this.myForm.reset();
            $location.path("/home");
          } else {
            alert("user not found");
          }

          //console.log(users);
          // users.map((item) => {
          //   //console.log(item.email);
          //   // console.log(email);
          //   if (name == "" || email == "" || password == "") {
          //     alert("fill the details");
          //     if (item.email == email) {
          //       //console.log("usydgy");
          //       if (item.password == password) {
          //         alert("login success");
          //         $location.path("/home");
          //       }
          //     }
          //   } else {
          //     $location.path("/");
          //   }
          // });
        },
        function (error) {
          alert("something went wrong");
        }
      );
    };
    $scope.goToRegister = function () {
      //alert("hi");
      $location.path("/register");
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
