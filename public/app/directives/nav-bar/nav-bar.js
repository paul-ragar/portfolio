angular.module('portfolio')
.directive('navBar', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/nav-bar/nav-bar.html',
    controller: ($scope, $state, mainService) => {

      $scope.goAbout = () => {
        document.querySelector('.about-section').scrollIntoView({
          "scroll-behavior": "smooth"
        });
      }
      $scope.goProjects = () => {
        document.querySelector('.projects-section').scrollIntoView({
          "behavior": "smooth"
        });
      }
      $scope.goContact = () => {
        document.querySelector('.contact-section').scrollIntoView({
          "behavior": "smooth"
        });
      }

      // $(function(){
      //
      //   $('a[href^="#"]').click(function(){
      //
      //     var target = $(this).attr('href');
      //     var strip = target.slice(1);
      //     var anchor = $("a[name='" + strip + "']")
      //
      //     // e.preventDefault();
      //
      //     $('html, body').animate({
      //
      //       scrollTop: anchor.offset().top
      //
      //     }, 'slow');
      //
      //   });
      //
      // });

      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });















      // End of Controller
    }
    // End of return
  }
  // End of Directive
})
