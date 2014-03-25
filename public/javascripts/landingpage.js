var landingpage = angular.module("landingpage", ['ngRoute']);

function signUpController($scope) {
    $scope.pw1 = 'password';
}

landingpage.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/view1.html',
        controller: ''
      }).
      when('/login', {
        templateUrl: '/partials/login.html',
        controller: ''
      }).
      when('/signup', {
        templateUrl: '/partials/signup.html',
        controller: ''
      }).
      when('/emailconfirmationpage', {
        templateUrl: '/partials/emailconfirmationpage.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/partials/view1.html'
      });
  }]);


