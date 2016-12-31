'use strict';

angular.module('portfolio', ['ui.router', 'ngAnimate']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  }).state('game', {
    url: '/game',
    templateUrl: './app/views/gameView.html'
  }).state('carousel', {
    url: '/carousel',
    templateUrl: './app/views/carousel.html'
  }).state('karie', {
    url: '/karie',
    templateUrl: './app/views/karie.html'
  });

  // End of app.js
});
'use strict';

angular.module('portfolio').controller('mainCtrl', function ($scope, mainService) {});
'use strict';

angular.module('portfolio').service('mainService', function ($http, $state) {});
'use strict';

angular.module('portfolio').directive('aboutDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/about/about.html',
    controller: function controller($scope, $state, mainService) {}

    // End of Controller

    // End of return
  };
  // End of Directive
});
'use strict';

angular.module('portfolio').directive('carousel', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/carousel/carousel.html',
    controller: function controller($scope, $state, mainService) {

      $scope.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      $scope.carousel = {
        marginLeft: -5
      };

      $scope.scrollLeft = function () {
        var currentMargin = $scope.carousel.marginLeft;
        console.log(currentMargin);
        if (currentMargin === -3545) {
          return false;
        } else if (currentMargin <= -3105) {
          $scope.carousel = {
            marginLeft: currentMargin - 440
          };
        } else {
          $scope.carousel = {
            marginLeft: currentMargin - 620
          };
        }
      };

      $scope.scrollRight = function () {
        var currentMargin = $scope.carousel.marginLeft;
        if (currentMargin === -5) {
          return false;
        } else if (currentMargin === -3545) {
          $scope.carousel = {
            marginLeft: currentMargin + 440
          };
        } else {
          $scope.carousel = {
            marginLeft: currentMargin + 620
          };
        }
      };

      // End of Controller
    }
    // End of return
  };
  // End of Directive
});
'use strict';

angular.module('portfolio').directive('gameDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/gameDir/gameDir.html',
    controller: function controller($scope, $state, $timeout, mainService) {

      $scope.pause = false;
      $scope.gameOver = false;
      $scope.newGame = true;
      $scope.startGame = false;

      $scope.coord = {
        x: 20,
        y: 20
      };
      $scope.fruit = {
        x: 0,
        y: 0
      };
      $scope.tail = [$scope.coord];
      $scope.score = 0;
      $scope.dist = 20;
      $scope.left = 37;
      $scope.up = 38;
      $scope.right = 39;
      $scope.down = 40;
      $scope.dir = "right";
      $scope.speed = 100;

      // VARIABLES ABOVE ^^^^^^^^^^^

      // FUNCTIONS BELOW

      $scope.newFruit = function () {
        $scope.fruit.x = Math.floor(Math.random() * 23 + 1) * 20;
        $scope.fruit.y = Math.floor(Math.random() * 23 + 1) * 20;
      };

      $scope.moveDude = function (keyCode) {
        if ($scope.gameOver) {
          return false;
        }
        if ($scope.startGame) {} else {
          $scope.startNewGame();
        }
        var currentDir = $scope.dir;
        if (keyCode == $scope.left && currentDir !== "right") {
          $scope.dir = "left";
        } else if (keyCode == $scope.up && currentDir !== "down") {
          $scope.dir = "up";
        } else if (keyCode == $scope.right && currentDir !== "left") {
          $scope.dir = "right";
        } else if (keyCode == $scope.down && currentDir !== "up") {
          $scope.dir = "down";
        } else if (keyCode == 32) {
          if ($scope.pause) {
            $scope.pause = false;
            $scope.startNewGame();
          } else {
            $scope.pause = true;
          }
        }
      };

      $scope.direction = function () {
        $scope.newCell = {
          x: $scope.tail[0].x,
          y: $scope.tail[0].y
        };
        // console.log(" ");
        // console.log("newCell: ",$scope.newCell);
        if ($scope.pause) {
          return false;
        }
        var currentX = $scope.tail[0].x;
        var currentY = $scope.tail[0].y;
        if ($scope.dir == "left") {
          currentX -= $scope.dist;
          if (currentX < 0) {
            $scope.gameOver = true;
            // $scope.startGame = false;
            return false;
          }
        } else if ($scope.dir == "up") {
          currentY -= $scope.dist;
          if (currentY < 0) {
            $scope.gameOver = true;
            // $scope.startGame = false;
            return false;
          }
        } else if ($scope.dir == "right") {
          currentX += $scope.dist;
          if (currentX >= 500) {
            $scope.gameOver = true;
            // $scope.startGame = false;
            return false;
          }
        } else if ($scope.dir == "down") {
          currentY += $scope.dist;
          if (currentY >= 500) {
            $scope.gameOver = true;
            // $scope.startGame = false;
            return false;
          }
        }
        $scope.newCell = {
          x: currentX,
          y: currentY
        };
        for (var i = 0; i < $scope.tail.length; i++) {
          if ($scope.newCell.x === $scope.tail[i].x && $scope.newCell.y === $scope.tail[i].y) {
            $scope.gameOver = true;
            // $scope.startGame = false;
            return false;
          }
        }

        $scope.tail.unshift($scope.newCell);

        if ($scope.newCell.x == $scope.fruit.x && $scope.newCell.y == $scope.fruit.y) {
          $scope.score += 100;
          $scope.speed -= 1;
          $scope.newFruit();
        } else {
          $scope.tail.pop();
        }
        $scope.startNewGame();
      };

      $scope.startNewGame = function () {
        $scope.startGame = true;
        $timeout($scope.direction, $scope.speed);
      };
    }
  };
});
'use strict';

angular.module('portfolio').directive('navBar', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/nav-bar/nav-bar.html',
    controller: function controller($scope, $state, mainService) {}

    // End of Controller

    // End of return
  };
  // End of Directive
});
'use strict';

angular.module('portfolio').directive('svgDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/svgDir/svgDir.html',
    controller: function controller($scope, $state, mainService) {}
  };
});