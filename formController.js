// var app = angular.module("myApp", []);

// app.controller("formController", function ($scope, $http) {
// $scope.uploadfiles = function () {
//   var formdata = new FormData();
//   angular.forEach($scope.files, function (file) {
//     formdata.append("files[]", file);
//   });
//   $http
//     .post("http://localhost:3006/formUsers", formdata, {
//       transformRequest: angular.identity,
//       header: { "Content-Type": undefined },
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
//alert("sydgy");
// var formdata = new FormData();
// formdata.append("name", name);
// console.log(name);
// angular.forEach($scope.files, function (file) {
//   formdata.append("files", file);
// });
//   console.log(formdata);
//   for (var i in formdata) {
//     if (formdata.hasOwnProperty(i) && formdata[i] === null) {
//       alert("please fill the details");
//       return;
//     }
//     console.log("hello");
//   }
//   $http({
//     method: "POST",
//     url: "http://localhost:3006/formUsers",
//     data: formdata,
//     headers: { "Content-Type": undefined },
//   }).then(
//     function (response) {
//       console.log("file uploaded", response.data);
//     },
//     function (error) {
//       console.log("error", error);
//     }
//   );
// });
// var formdata = {
//   files: fileInput,
// };
// $http({
//   method: "POST",
//   url: "http://localhost:3006/formUsers",
//   data: formdata,
//   headers: { "Content-Type": undefined },
// }).then(
//   function (response) {
//     console.log("file uploaded", response.data);
//   },
//   function (error) {
//     console.log("error", error);
//   }
// );

var app = angular.module("myApp");
app.controller(
  "formController",
  function ($scope, $rootScope, $location, $http) {
    // $rootScope.title = "Stay Home Stay Safe!";
    // $scope.message = "HI There";

    const fileList = document.getElementById("file-list");
    const fileInput = document.getElementById("fileInput");

    fileInput.addEventListener("change", function (event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file1 = files[i];
        $scope.file = file1;
        const fileItem = createFileItem(file1);
        console.log(file1);
        fileList.appendChild(fileItem);
        console.log(fileItem);
      }
    });
    function createFileItem(file) {
      const fileItem = document.createElement("li");
      fileItem.className = "file-item";

      const fileName = document.createElement("span");
      fileName.className = "file-name";
      fileName.textContent = file.name;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        fileItem.remove();
      });

      fileItem.appendChild(fileName);
      fileItem.appendChild(removeButton);

      return fileItem;
    }
    // console.log(file);
    $scope.uploadfiles = function (file) {
      var fileDataArray = [];
      var storefiles = file.name;

      console.log(storefiles);
      alert("dgbsydbgyu");
      var formdata = new FormData();

      console.log(storefiles);
      angular.forEach(storefiles, function (file) {
        var filedata = {
          filename: file.name,
          size: file.size,
          type: file.type,
        };
        fileDataArray.push(filedata);
      });

      // $http
      //   .post("http://localhost:3006/formUsers", fileDataArray, {
      //     transformRequest: angular.identity,
      //     headers: { "Content-Type": undefined },
      //   })
      //   .then(function (response) {
      //     alert("uploaded");
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // alert("ufdytfjy");
    };

    init();

    function init() {}
  }
);
