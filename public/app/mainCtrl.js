angular.module('portfolio')
.controller('mainCtrl', function($scope, mainService) {


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
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }










})
