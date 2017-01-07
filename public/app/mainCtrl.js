angular.module('portfolio')
.controller('mainCtrl', function($scope, mainService, $timeout) {

  $scope.projectList = true;
  $scope.projectContent = false;
  $scope.desertTwig = mainService.desertTwig;
  $scope.desertTwigSlider = {
    left: 0
  }

  $scope.showProjectContent = (id) => {
    // console.log("Selected Project ID: ",id);
    $scope.selectedProject = mainService.getProjectContent(id);
    $scope.projectContent = true;
    $scope.projectList = false;
  }

  $scope.backToProjectList = () => {
    $scope.projectContent = false;
    $scope.projectList = true;
  }

  $scope.displayModal = (value) => {
    if (value) {
      console.log("hello");
      $scope.desertTwigModal = true;
    } else {
      return false;
    }
  }
  $scope.hideModal = () => {
    $scope.desertTwigModal = false;
  }
  $scope.panLeft = () => {
    $scope.desertTwigModal = true;

  }
  $scope.panRight = () => {
    $scope.desertTwigModal = true;

    var currentLeft = $scope.desertTwigSlider.left;
    console.log(currentLeft);
    $scope.desertTwigSlider = {
      "left": -100
    }
  }

  $scope.openMailer = () => {
    window.location.href = "mailto:paul.ragar@gmail.com?subject=&body=";
  }

  $scope.skills = mainService.skills;
  $scope.projects = mainService.projects;





// NG-REPEAT LINKS FROM class="images-container" a tag
// href="{{project.hreflink}}"




})





// CODE TO COPY SPECIFIED TEXT TO CLIPBOARD


// var copyTextareaBtn = document.querySelector('.copy-btn');

// $scope.copyText = () => {
//   var copyTextarea = document.querySelector('.email-copy-text');
//   copyTextarea.select();
//
//   try {
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copying text command was ' + msg);
//     $scope.greenCheck = {
//       "display": "flex"
//     }
//     $timeout(function () {
//       $scope.greenCheck = {
//         "display": "none"
//       }
//     }, 3000);
//   } catch (err) {
//     console.log('Oops, unable to copy');
//   }
// }
