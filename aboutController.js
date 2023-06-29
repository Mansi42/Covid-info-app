var app = angular.module("myApp");
app.controller(
  "AboutController",
  function ($scope, $rootScope, $location, $http) {
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

    var diseases = [
      { name: "fever", positive: "0", negative: "0" },
      { name: "shortness of breathe", positive: "0", negative: "0" },
      { name: "loss of taste or smell", positive: "0", negative: "0" },
      { name: "cough and cold", positive: "0", negative: "0" },
      { name: "shivering", positive: "0", negative: "0" },
    ];
    $scope.diseases = diseases;

    $scope.increasePositives = function (disease) {
      disease.positive++;
    };
    $scope.increaseNegatives = function (disease) {
      disease.negative++;
    };
    $scope.exportToPdf = function () {
      console.log("duysuhduhn");
      var doc = new jsPDF();
      var htmlTable = document.getElementById("myTable");
      doc.html(htmlTable, {
        callback: function () {
          doc.save("table.pdf");
        },
      });
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
