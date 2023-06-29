var app = angular.module("myApp");
app.controller(
  "UsersController",
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
    $scope.goToForm = function () {
      $location.path("/form");
    };
    $scope.goToMain = function () {
      $location.path("/main");
    };
    $scope.goToLogin = function () {
      $location.path("/login");
    };
    $scope.goToRegister = function () {
      $location.path("/register");
    };

    $scope.id = null;
    $scope.name = null;
    $scope.email = null;
    $scope.password = null;
    $scope.gender = null;
    $scope.dob = null;
    $scope.dod = null;
    $scope.address = null;
    $scope.phoneNumber = null;
    $scope.vaccineName = null;
    $scope.vstatus = null;
    // $scope.images = null;
    $scope.ausers = null;
    $scope.showUsers = function (
      id,
      name,
      email,
      password,
      gender,
      dod,
      address,
      phoneNumber,
      vaccineName,
      vstatus
      // images
    ) {
      // alert("adjamdaijudn");
      $http.get("http://localhost:3000/appUsers").then(function (response) {
        console.log(response.data);
        const ausers = response.data;
        console.log(ausers);

        $scope.appointusers = response.data;
      });
    };

    $scope.saveData = function (
      id,
      name,
      email,
      password,
      gender,
      dod,
      address,
      phoneNumber,
      vaccineName,
      vstatus,
      oldid
      // images
    ) {
      //alert("testyui");
      var data = {
        id: id,
        name: name,
        email: email,
        password: password,
        gender: gender,
        dod: dod,
        address: address,
        phoneNumber: phoneNumber,
        vaccineName: vaccineName,
        vstatus: vstatus,
        // images: images,
      };
      //alert("testewweewui");

      for (var i in data) {
        if (data.hasOwnProperty(i) && data[i] === null) {
          alert("please fill the details");
          return;
        }
        console.log("hello");
      }

      if (id == oldid) {
        $http
          .patch("http://localhost:3000/appUsers/" + id, data)
          .then(function (response) {
            console.log("saved");
          });
      } else {
        $http
          .post(" http://localhost:3000/appUsers", JSON.stringify(data))
          .then(
            function (response) {
              alert("data saved");
              console.log(response);
              if (response.data) {
                console.log("hi"); // console.log(response.data.name);
                $scope.Id = response.data.id;
                $scope.Name = response.data.name;
                $scope.Email = response.data.email;
                $scope.Password = response.data.password;
                $scope.Gender = response.data.gender;
                $scope.Dod = response.data.dod;
                $scope.Address = response.data.address;
                $scope.PhoneNumber = response.data.phoneNumber;
                $scope.VaccineName = response.data.vaccineName;
                $scope.Vstatus = response.vstatus;
                // $scope.Images = response.data.images;
              }
            },
            function (error) {
              console.log(error);
            }
          );
      }
    };

    $scope.Deletebtn = function (id) {
      // alert("hydug");
      console.log(id);
      $http.delete("http://localhost:3000/appUsers/" + id).then(
        function (response) {
          console.log("data deleted");
        },
        function (error) {
          console.log(error.message);
        }
      );
      $scope.showUsers();
    };
    // $scope.dataLoaded = false;
    // $scope.fetchData = function () {
    //   var id = $scope.id;
    //   $http
    //     .get("http://localhost:3000/appUsers/" + id)
    //     .then(function (response) {
    //       $scope.data = response.data;
    //       $scope.dataLoaded = true;
    //     })
    //     .catch(function (error) {
    //       console.log("error", error);
    //     });
    // };
    $scope.Editbtn = function (
      id,
      name,
      email,
      password,
      gender,
      dod,
      address,
      phoneNumber,
      vaccineName,
      vstatus
      // images
    ) {
      console.log(id);
      $http
        .get("http://localhost:3000/appUsers/" + id)
        .then(function (response) {
          console.log(response);
          console.log(response.data.dod);
          console.log(response.data.email);
          $scope.id = id;
          $scope.name = response.data.name;
          $scope.email = response.data.email;
          $scope.password = response.data.password;
          $scope.gender = response.data.gender;
          $scope.dod = response.data.dod;
          $scope.address = response.data.address;
          $scope.phoneNumber = response.data.phoneNumber;
          $scope.vaccineName = response.data.vaccineName;
          $scope.vstatus = response.data.vstatus;
          $scope.oldid = response.data.id;
          // $scope.images = response.data.images;
        })
        .catch(function (error) {
          console.log("error", error);
        });
    };
    app.directive("fileModel", [
      "$parse",
      function ($parse) {
        return {
          restrict: "A",
          link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind("change", function () {
              scope.$apply(function () {
                modelSetter(scope, element[0].images);
              });
            });
          },
        };
      },
    ]);
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
