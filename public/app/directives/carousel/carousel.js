angular.module('portfolio')
.directive('carousel', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/carousel/carousel.html',
    controller: ($scope, $state, mainService) => {

      $scope.images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      $scope.carousel = {
        marginLeft: -5
      }

      $scope.scrollLeft = () => {
        var currentMargin = $scope.carousel.marginLeft;
        console.log(currentMargin);
        if (currentMargin === -3545) {
          return false;
        } else if (currentMargin <= -3105) {
          $scope.carousel = {
            marginLeft: currentMargin - 440
          }
        } else {
          $scope.carousel = {
            marginLeft: currentMargin - 620
          }
        }


      }

      $scope.scrollRight = () => {
        var currentMargin = $scope.carousel.marginLeft;
        if (currentMargin === -5) {
          return false;
        } else if (currentMargin === -3545){
          $scope.carousel = {
            marginLeft: currentMargin + 440
          }
        } else {
          $scope.carousel = {
            marginLeft: currentMargin + 620
          }
        }

      }





















      // End of Controller
    }
    // End of return
  }
  // End of Directive
})
