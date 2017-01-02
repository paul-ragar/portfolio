angular.module('portfolio')
.directive("drawing", () => {
  return {
    restrict: "E",
    templateUrl: './app/directives/drawing/drawing.html',
    controller: ($scope) => {

      $scope.isDrawing = false;
      $scope.drawingArr = [];
      $scope.lineArr = [];
      $scope.dot;

      $scope.drawingArr.push($scope.lineArr);
      
      $scope.startDraw = () => {
        $scope.isDrawing = true;
      }
      $scope.stopDraw = () => {
        $scope.isDrawing = false
        $scope.drawingArr.push($scope.lineArr);
        console.log("drawingArr: ",$scope.drawingArr);
      }
      $scope.lineDraw = () => {
        if ($scope.isDrawing) {
          $scope.dot = {
            x: event.offsetX,
            y: event.offsetY
          };
          $scope.lineArr.push($scope.dot);
        } else {
          return false;
        }
      }










      //END OF CONTROLLER
    }
  };
});
