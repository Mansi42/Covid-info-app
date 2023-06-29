var app = angular.module("myApp");
app.controller(
  "DetailController",
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
    init();

    const url = "https://api.covidtracking.com/v1/us/daily.json";

    $http.get(url).then(
      (response) => {
        console.log("success");
        console.log(response);
        $scope.all_data = response.data;

        var labels = [];
        var data = [];
        angular.forEach(response.data, function (item) {
          //console.log(item.date);
          labels.push(item.date);
          data.push(item.totalTestResults);
          data.push(item.negative);
          data.push(item.death);
        });
        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Total Cases",
                data: data,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
              {
                label: "Negative Cases",
                data: data,
                backgroundColor: "rgba(255,193,204,0.5)",
                borderColor: "rgba(255,193,204,1)",
                borderWidth: 1,
              },
              {
                label: "Death Cases",
                data: data,
                backgroundColor: "rgba(255, 148, 120,1)",
                borderColor: "rgba(255, 76, 48 , 1)",
                borderWidth: 1,
              },
              {
                label: "Positive Cases",
                data: data,
                backgroundColor: "rgba(201, 242, 155,0.5)",
                borderColor: "rgba(22, 160, 133,1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      },
      (error) => {
        console.log("error");
        console.log(error);
      }
    );
    // $http.get(url).then(
    //   (data) => {
    //     $scope.setGraphData(data);
    //     console.log("success");
    //   },
    //   (error) => {
    //     console.log("error");
    //     console.log(error);
    //   }
    // );
    $scope.setGraphData = function (graphData) {
      var vlabel = [];
      var vdata = [];

      angular.forEach(graphData, function (value) {
        vlabels.push(
          value.positive + value.death + value.negative + value.totalTestResults
        );
        vdata.push(value.date);
      });
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
