angular.module('portfolio')
.directive('gameDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/gameDir/gameDir.html',
    controller: ($scope, $state, $interval, mainService) => {


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
      $scope.currentTailCell = {
        x: 0,
        y: 0
      }
      $scope.score = 0;



      $scope.newFruit = () => {
        // $scope.checkTail = true;
        // console.log($scope.currentCell);

        // $scope.score += 100;
        $scope.fruit.x = Math.floor((Math.random() * 23) + 1) * 20;
        $scope.fruit.y = Math.floor((Math.random() * 23) + 1) * 20;
      }
      $scope.dist = 20;
      $scope.left = 37;
      $scope.up = 38;
      $scope.right = 39;
      $scope.down = 40;
      $scope.pause = false;
      $scope.gameOver = false;

      // console.log($scope.tail);

      $scope.moveDude = (keyCode) => {
        if ($scope.gameOver) {
          return false;
        }
        var currentDir = $scope.dir;
        if (keyCode == $scope.left && currentDir !== "right") {
          $scope.dir = "left"
        } else if (keyCode == $scope.up && currentDir !== "down") {
          $scope.dir = "up"
        } else if (keyCode == $scope.right && currentDir !== "left") {
          $scope.dir = "right"
        } else if (keyCode == $scope.down && currentDir !== "up") {
          $scope.dir = "down"
        } else if (keyCode == 32) {
          if ($scope.pause) {
            $scope.pause = false;
          } else {
            $scope.pause = true;
          }
        }
      }

      $scope.direction = () => {
        $scope.currentCell = {
          x: $scope.coord.x,
          y: $scope.coord.y
        }
        if ($scope.pause) {
          return  false;
        }
        // console.log($scope.currentCell.x, $scope.currentCell.y);
        var currentX = $scope.coord.x;
        var currentY = $scope.coord.y;
        if ($scope.dir == "left") {
          currentX -= $scope.dist;
          if (currentX < 0) {
            $scope.gameOver = true;
            return false;
          }
        } else if ($scope.dir == "up") {
          currentY -= $scope.dist;
          if (currentY < 0) {
            $scope.gameOver = true;
            return false;
          }
        } else if ($scope.dir == "right") {
          currentX += $scope.dist;
          if (currentX >= 500) {
            $scope.gameOver = true;
            return false;
          }
        } else if ($scope.dir == "down") {
          currentY += $scope.dist;
          if (currentY >= 500) {
            $scope.gameOver = true;
            return false;
          }
        }
        $scope.coord = {
          x: currentX,
          y: currentY
        }
        if ($scope.coord.x == $scope.fruit.x && $scope.coord.y == $scope.fruit.y) {

          $scope.score += 100;


          if ($scope.tail.length === 0) {
            $scope.tail.push($scope.currentCell);
          } else {

            console.log("Tail[0] : ",$scope.tail[$scope.tail.length].x);

            $scope.currentTailCell = {
              x: $scope.tail[$scope.tail.length].x,
              y: $scope.tail[$scope.tail.length].y
            }
            console.log(currenTailCell);

            $scope.tail.push($scope.currentTailCell);
          }

          $scope.newFruit();
        }
      }

      $interval($scope.direction, 100)



    }
  }
})
