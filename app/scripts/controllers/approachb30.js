'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:HeatMapCtrl
 * @description
 * # HeatMapCtrl
 * Controller of the frontEndApp
 */
angular.module('dashboardApp')

.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
  GoogleMapApi.configure({
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
}])

  .controller('ApproachBController30', ['$scope', 'uiGmapGoogleMapApi', function ($scope, GoogleMapApi) {

    $scope.locations;
    $scope.latitude_center;
    $scope.longitude_center;

    $scope.build_circles = function () {
      var circles = [];
      for (var i = 0; i <   $scope.locations.length; i++) {
        var coords = $scope.locations[i];
        var color_value = '#08B21F';
        if ($scope.locations[i].mapValue > 0) {
          color_value = '#FF0000';
          $scope.latitude_center = $scope.locations[i].latitude;
          $scope.longitude_center = $scope.locations[i].longitude;
        }
        var circle = {
          id: i,
          center: {
            latitude: coords.latitude,
            longitude: coords.longitude
          },
          radius: 13,
          stroke: {
            // color: '#08B21F',
            color: color_value,
            weight: 2,
            opacity: 1
          },
          fill: {
            // color: '#08B21F',
            color: color_value,
            opacity: 1
          },
          geodesic: true, // optional: defaults to false
          draggable: false, // optional: defaults to false
          clickable: true, // optional: defaults to true
          editable: false, // optional: defaults to false
          visible: true, // optional: defaults to true
          events:{
            dblclick: function(){
              window.alert("circle dblclick");
            }
          }
        };
        circles.push(circle);
      }

      return circles;
    };

    $.ajax({
        // url: 'http://localhost:8095/DistDemoTableauLogin/rest/services/locations30',
        // url: 'http://localhost:8095/Heatmap/rest/services/locations30',
        url: 'http://dashboards.bridgeenergygroup.com/HeatMapVsHeatCircle/rest/services/locations30',
        dataType: 'json',
        isArray: true,
        data: null,
        async: false,
        success: function (json) {
          if( json !== null && json !== undefined ) {
            $scope.locations = json.locationDTO;
          }
        },
        error: function (mensaje, error, status) {}
    });

    function MockHeatLayer(heatLayer) {
        var heatData = [];
        for (var i = 0; i <   $scope.locations.length; i++) {
          var coords = $scope.locations[i];
          var weight_value = 0;
          if (coords.mapValue > 0) {
            weight_value = 50;
          }

          var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
          var weightedLoc = {
            location: latLng,
            // weight: 50
            weight: weight_value
          };
          heatData.push(weightedLoc);
        }

        var pointArray = new google.maps.MVCArray(heatData);
        heatLayer.setData(pointArray);
        heatLayer.set('radius', heatLayer.get('radius') ? null : 15);
        heatLayer.set('opacity', heatLayer.get('opacity') ? null : 10);
        // heatLayer.set('dissipating', heatLayer.get('dissipating') ? null : false);
        heatLayer.set('maxIntensity', heatLayer.get('maxIntensity') ? null : 20);
    };

    $scope.build_circles();

    angular.extend($scope, {
      map: {
        show: true,
        control: {},
        heatLayerCallback: function (layer) {
          var mockHeatLayer = new MockHeatLayer(layer);
        },
        showHeat: true,
        center: {
          latitude: $scope.latitude_center,
          longitude: $scope.longitude_center
          // latitude: $scope.locations[0].latitude,
          // longitude: $scope.locations[0].longitude
        },
        options: {
          streetViewControl: false,
          panControl: false,
          zoomcontrol: false,
          mapTypeControl : false
          // maxZoom: 20,
          // minZoom: 3
        },
        zoom: 13,
        bounds: {},
        circles: $scope.build_circles()
      }
    });

    angular.extend($scope, {
      map2: {
        show: true,
        control: {},
        heatLayerCallback: function (layer) {
          var mockHeatLayer = new MockHeatLayer(layer);
        },
        showHeat: true,
        center: {
          latitude: $scope.latitude_center,
          longitude: $scope.longitude_center
          // latitude: $scope.locations[0].latitude,
          // longitude: $scope.locations[0].longitude
        },
        options: {
          streetViewControl: false,
          panControl: false,
          zoomcontrol: false,
          mapTypeControl : false
          // maxZoom: 20,
          // minZoom: 3
        },
        zoom: 14,
        bounds: {},
        circles: $scope.build_circles()
      }
    });

    angular.extend($scope, {
      map3: {
        show: true,
        control: {},
        heatLayerCallback: function (layer) {
          var mockHeatLayer = new MockHeatLayer(layer);
        },
        showHeat: true,
        center: {
          latitude: $scope.latitude_center,
          longitude: $scope.longitude_center
          // latitude: $scope.locations[0].latitude,
          // longitude: $scope.locations[0].longitude
        },
        options: {
          streetViewControl: false,
          panControl: false,
          zoomcontrol: false,
          mapTypeControl : false
          // maxZoom: 20,
          // minZoom: 3
        },
        zoom: 16,
        bounds: {},
        circles: $scope.build_circles()
      }
    });
}]);
