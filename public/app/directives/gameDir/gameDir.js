angular.module('portfolio')
.directive('gameDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/gameDir/gameDir.html',
    controller: ($scope, $state, $interval, mainService) => {

      $scope.checkTail = false;
      $scope.coord = {
        x: 0,
        y: 0
      }
      $scope.fruit = {
        x: 0,
        y: 0
      }
      $scope.tail = [];
      $scope.currentCell = {
        x: 0,
        y: 0
      }
      $scope.score = 0;



      $scope.newFruit = () => {
        $scope.checkTail = true;
        // console.log($scope.currentCell);
        // $scope.tail.push($scope.currentCell);

        $scope.score += 100;
        $scope.fruit.x = Math.floor((Math.random() * 23) + 1) * 20;
        $scope.fruit.y = Math.floor((Math.random() * 23) + 1) * 20;
      }
      $scope.dist = 20;
      $scope.left = 37;
      $scope.up = 38;
      $scope.right = 39;
      $scope.down = 40;

      $scope.moveDude = (keyCode) => {
        if (keyCode == $scope.left) {
          $scope.dir = "left"
        } else if (keyCode == $scope.up) {
          $scope.dir = "up"
        } else if (keyCode == $scope.right) {
          $scope.dir = "right"
        } else if (keyCode == $scope.down) {
          $scope.dir = "down"
        }
      }

      $scope.direction = () => {
        $scope.currentCell = {
          x: $scope.coord.x,
          y: $scope.coord.y
        }
        console.log($scope.currentCell.x, $scope.currentCell.y);
        var currentX = $scope.coord.x;
        var currentY = $scope.coord.y;
        if ($scope.dir == "left") {
          currentX -= $scope.dist;
        } else if ($scope.dir == "up") {
          currentY -= $scope.dist;
        } else if ($scope.dir == "right") {
          currentX += $scope.dist;
        } else if ($scope.dir == "down") {
          currentY += $scope.dist;
        }
        $scope.coord = {
          x: currentX,
          y: currentY
        }
        if ($scope.coord.x == $scope.fruit.x && $scope.coord.y == $scope.fruit.y) {
          $scope.newFruit();
        }
      }

      $interval($scope.direction, 100)



    }
  }
})
