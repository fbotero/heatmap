'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.some_variable = "Eureka!";
    $scope.data_stats_date = new Date();
    $scope.scenario = 2;
    $scope.current_scenario = "Base";
    $scope.current_scenario = $scope.current_scenario.replace(/_/g," ");

    $scope.buttons_disabled = true;


    // $scope.init = function() {

    $.ajax({
        // url: 'http://localhost:8080/Backend/rest/services/getDataStats',
        // url: 'http://dashboards.bridgeenergygroup.com/DistDemoTableau/rest/services/getDataStats',
        url: 'http://52.4.79.0:8095/DistDemoTableauLogin/rest/services/getDataStats',
        // url: 'http://52.4.79.0:8095/DistDemoTableau/rest/services/getDataStats', // This is the one good
        // url: 'http://54.153.107.157:8095/DistDemoTableauLogin/rest/services/getDataStats',
        dataType: 'json',
        data: null,
        async: false,
        success: function (json) {
          if( json !== null && json !== undefined ) {
            $scope.meter = json.meter;
            $scope.feeder = json.feeder;
            $scope.substraction = json.substraction;
            $scope.area = json.area;
            $scope.collectors = json.collectors;
            // $scope.buttons_disabled = false;
          }

        },
        error: function (mensaje, error, status) {

        }
    });

  // };




    $scope.call_stats = function() {
      $.ajax({
          // url: 'http://localhost:8080/Backend/rest/services/getStats/' + $scope.scenario,
          // url: 'http://dashboards.bridgeenergygroup.com/DistDemoTableau/rest/services/getStats/' + $scope.scenario,
          url: 'http://52.4.79.0:8095/DistDemoTableauLogin/rest/services/getStats/' + $scope.scenario,
          // url: 'http://52.4.79.0:8095/DistDemoTableau/rest/services/getStats/' + $scope.scenario, // This is the one
          // url: 'http://54.153.107.157:8095/DistDemoTableau/rest/services/getStats/' + $scope.scenario,
          dataType: 'json',
          data: null,
          async: false,
          success: function (json) {
            if( json !== null && json !== undefined ) {
              $scope.data_update_time = json.updateTime;
              $scope.data_start = json.dataStart;
              $scope.data_stop = json.dataStop;
              $scope.scenario_time = json.scenarioTime;

              $scope.current_scenario = json.currentScenario;
              $scope.current_scenario = json.currentScenario.replace(/_/g," ");

              if (json.enable == 'true' ) {
                $scope.buttons_disabled = false;
              }
            }
          },
          error: function (mensaje, error, status) {
          }
      });
      // $scope.buttons_disabled = true;
    };

    $scope.call_stats();

    $scope.runDataUpdate = function() {
      alert('Run Data Update Started');
      // $http.post('http://localhost:8080/Backend/rest/services/runDataUpdate', $scope.scenario).
      // $http.post('http://dashboards.bridgeenergygroup.com/DistDemoTableau/rest/services/runDataUpdate', $scope.scenario).
      $http.post('http://52.4.79.0:8095/DistDemoTableauLogin/rest/services/runDataUpdate', $scope.scenario).
      // $http.post('http://52.4.79.0:8095/DistDemoTableau/rest/services/runDataUpdate', $scope.scenario). //  this is the one
      // $http.post('http://54.153.107.157:8095/DistDemoTableau/rest/services/runDataUpdate', $scope.scenario).
      then(function(response) {
        $scope.call_stats();
        $scope.buttons_disabled = false;
        alert('Data Update Successful');
      }, function(response) {
        alert('Data Update Failed');
      }).finally(function() {
      });
    };

    $scope.runScenario = function() {
      if ($scope.scenario === "7") {
        alert('Functionality Pending');
      } else {
        alert('Run Scenario Started');
        // $http.post('http://localhost:8080/Backend/rest/services/runScenario', $scope.scenario).
        // $http.post('http://dashboards.bridgeenergygroup.com/DistDemoTableau/rest/services/runScenario', $scope.scenario).
        // $http.post('http://localhost:8095/DistDemoTableauLogin/rest/services/runScenario', $scope.scenario).
        $http.post('http://52.4.79.0:8095/DistDemoTableau/rest/services/runScenario', $scope.scenario).  // This is the one
        // $http.post('http://54.153.107.157:8095/DistDemoTableau/rest/services/runScenario', $scope.scenario).
          then(function(response) {

            $scope.call_stats();
            alert('Run Scenario Successful');
          }, function(response) {

            alert('Run Scenario Successful');
          }).finally(function() {
          });
        }
    };

    // $scope.runScenario = function() {
    //   if ($scope.scenario === "6") {
    //     alert('Functionality Pending');
    //   } else {
    //     alert('Process started');
    //     $.ajax({
    //         // url: 'http://localhost:8080/Backend/rest/services/checkScenario/' + $scope.scenario,
    //         url: 'http://54.153.107.157:8095/DistDemoTableau/rest/services/getStats/' + $scope.scenario,
    //         dataType: 'json',
    //         data: null,
    //         async: false,
    //         success: function (json) {
    //           if( json !== null && json !== undefined ) {
    //             if (json.flag == 'true') {
    //               // $http.post('http://localhost:8080/Backend/rest/services/runScenario', $scope.scenario).
    //               $http.post('http://54.153.107.157:8095/DistDemoTableau/rest/services/runScenario', $scope.scenario).
    //                 then(function(response) {
    //
    //                   $scope.call_stats();
    //                   alert('Run Scenario Successful');
    //                 }, function(response) {
    //
    //                   alert('Run Scenario Failed');
    //                 }).finally(function() {
    //                 });
    //
    //             } else {
    //
    //               alert('Run Scenario Failed');
    //             }
    //           }
    //         },
    //         error: function (mensaje, error, status) {
    //
    //         }
    //     });
    //
    // }
    // };

    $scope.changeScenario = function() {
      switch ($scope.scenario) {
        case "2":
            // $scope.current_scenario = "Base";
            $scope.isDisabled = true;
            break;
        case "3":
            // $scope.current_scenario = "Poor Comms";
            $scope.isDisabled = false;
            break;
        case "4":
            // $scope.current_scenario = "Collector Failed";
            $scope.isDisabled = false;
            break;
        case "5":
            // $scope.current_scenario = "Lateral Out";
            $scope.isDisabled = false;
            break;
        case "6":
            // $scope.current_scenario = "Partial Lateral Out";
            $scope.isDisabled = false;
            break;
        case "7":
            // $scope.current_scenario = "Meter Read Load";
            $scope.isDisabled = false;
            break;
      }
    };


}]);
