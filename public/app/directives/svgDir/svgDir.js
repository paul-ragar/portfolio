angular.module('portfolio')
.directive('svgDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/svgDir/svgDir.html',
    controller: ($scope, $state, mainService) => {
      
    }
  }

})
