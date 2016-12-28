angular.module('portfolio', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  })
  .state('game', {
    url: '/game',
    templateUrl: './app/views/gameView.html'
  })
  .state('carousel', {
    url: '/carousel',
    templateUrl: './app/views/carousel.html'
  })
  .state('karie', {
    url: '/karie',
    templateUrl: './app/views/karie.html'
  })




  // End of app.js
})
