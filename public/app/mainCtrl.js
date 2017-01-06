angular.module('portfolio')
.controller('mainCtrl', function($scope, mainService, $timeout) {


  var copyTextareaBtn = document.querySelector('.copy-btn');

  $scope.copyText = () => {
    var copyTextarea = document.querySelector('.email-copy-text');
    copyTextarea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      $scope.greenCheck = {
        "display": "flex"
      }
      $timeout(function () {
        $scope.greenCheck = {
          "display": "none"
        }
      }, 3000);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }

  $scope.skills = mainService.skills;
  $scope.projects = mainService.projects;








})
