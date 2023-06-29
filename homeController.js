var app = angular.module("myApp");
app.controller(
  "HomeController",
  function ($scope, $rootScope, $location, $http) {
    $("#carouselExampleControls").carousel();
    $rootScope.title = "Stay Home Stay Safe!";
    // $scope.message = "HI There";

    $scope.goToHome = function () {
      //alert("hi");
      $location.path("/home");
    };
    $scope.goToAbout = function () {
      //alert("hi");
      $location.path("/about");
    };
    $scope.goToDetails = function () {
      //alert("hi");
      $location.path("/details");
    };
    $scope.goToUsers = function () {
      //alert("hi");
      $location.path("/users");
    };
    $scope.$scope.items = [
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkd20hspNgjJ-i1PQcv7pR1RLwwplEnuzOA&usqp=CAU",
      },
      {
        imageUrl:
          "https://th.bing.com/th/id/OIP.FAQsYTn2h5Md4BAjR9DKmgAAAA?pid=ImgDet&w=205&h=205&c=7",
      },
      {
        imageUrl:
          "https://th.bing.com/th/id/OIP.DoJHqD92m70UscSdAyUnBgHaHa?pid=ImgDet&w=205&h=205&c=7",
      },
    ];

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
