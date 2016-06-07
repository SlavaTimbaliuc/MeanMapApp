// Creates the locateCtrl Module and Controller. Note that it depends on the 'geolocation' and 'gservice' modules and controllers.
var locateCtrl = angular.module('locateCtrl', ['geolocation', 'gservice']);
locateCtrl.controller('locateCtrl', function($scope, $http, $rootScope, geolocation, gservice){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    // Set initial coordinates to the center of the US
    $scope.formData.latitude = 39.500;
    $scope.formData.longitude = -98.350;

    geolocation.getLocation().then(function(data){

        // Set the latitude and longitude equal to the HTML5 coordinates
        coords = {lat:data.coords.latitude, long:data.coords.longitude};

        // Display coordinates in location textboxes rounded to three decimal points
        var longitude = parseFloat(coords.long).toFixed(3);
        var latitude = parseFloat(coords.lat).toFixed(3);

        gservice.refresh(latitude, longitude);

    });
});