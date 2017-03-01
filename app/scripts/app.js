'use strict';
/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */

angular.module('Authentication', []);

var app =
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Authentication',
    'uiGmapgoogle-maps'
    // 'ngJustGage'
    // 'angularSpinners'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/', {
      //   templateUrl: 'views/example.html',
      //   controller: 'ExampleCtrl'
      // })
      // .when('/', {
      //   templateUrl: 'views/dashboard.html',
      //   controller: 'DashboardCtrl'
      // })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
        // controllerAs: 'dashboard'
      })
      // .when('/login', {
      //   templateUrl: 'views/example.html',
      //   controller: 'ExampleCtrl'
      // })
      // .when('/approachA', {
      //   templateUrl: 'views/approachA.html',
      //   controller: 'approachAController'
      //   // controllerAs: 'dashboard'
      // })
      // .when('/approachB', {
      //   templateUrl: 'views/approachB.html',
      //   controller: 'approachBController'
      //   // controllerAs: 'dashboard'
      // })
      // .otherwise({
      //   redirectTo: '/approachA'
      // });
      .when('/approach2/', {
        templateUrl: 'views/approacha.html',
        controller: 'ApproachAController'
      })
      .when('/approach22/', {
        templateUrl: 'views/approacha2.html',
        controller: 'ApproachAController2'
      })
      .when('/approach230/', {
        templateUrl: 'views/approacha30.html',
        controller: 'ApproachAController30'
      })
      .when('/approach1/', {
        templateUrl: 'views/approachb.html',
        controller: 'ApproachBController'
      })
      .when('/approach12/', {
        templateUrl: 'views/approachb2.html',
        controller: 'ApproachBController2'
      })
      .when('/approach130/', {
        templateUrl: 'views/approachb30.html',
        controller: 'ApproachBController30'
      })
      // .otherwise({
      //   redirectTo: '/login'
      // });
      // .otherwise({
      //   redirectTo: '/dashboard'
      // });
      .otherwise({
        redirectTo: '/approach1'
      });
  })

  // .run(['$rootScope', '$location', '$cookieStore', '$http',
  //     function ($rootScope, $location, $cookieStore, $http) {
  //         // keep user logged in after page refresh
  //         // $rootScope.globals = $cookieStore.get('globals') || {};
  //         // // if ($rootScope.globals.currentUser) {
  //         // //     $http.defaults.headers.common['Authorization'] = 'Bearer  ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  //         // // }
  //         //
  //         $rootScope.$on('$locationChangeStart', function (event, next, current) {
  //             // redirect to login page if not logged in
  //             if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
  //                 $location.path('/login');
  //             }
  //         });
  //     }])
  // ;

  app.factory("urlServices", function () {
      return {
        // gaugeService: "http://localhost:8080/Backend/rest/services/getGauges",
        // mapService: "http://localhost:8080/Backend/rest/services/getMaps",
        // locationService: "http://localhost:8080/Backend/rest/services/listLocations"
          // gaugeService: "http://localhost:8090/Dashboard/rest/services/getGauges",
          // mapService: "http://localhost:8090/Dashboard/rest/services/getMaps",
          // locationService: "http://localhost:8090/Dashboard/rest/services/listLocations"
        // gaugeService: "http://54.153.107.157:8095/OpenSourceLogin/rest/services/getGauges",
        // mapService: "http://54.153.107.157:8095/OpenSourceLogin/rest/services/getMaps",
        // locationService: "http://54.153.107.157:8095/OpenSourceLogin/rest/services/listLocations"
        // gaugeService: "http://dashboards.bridgeenergygroup.com/OpenSourceLogin/rest/services/getGauges",
        // mapService: "http://dashboards.bridgeenergygroup.com/OpenSourceLogin/rest/services/getMaps",
        // locationService: "http://dashboards.bridgeenergygroup.com/OpenSourceLogin/rest/services/listLocations"
      };
  });
