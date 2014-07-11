$(function() {

  var map;
  var _currentMarkers = [];

  var mainWedding = [{marker: new google.maps.LatLng (44.5224942, -80.3316061), info: "Seligman Cabin", address: "130 Sleepy Hollow Rd, Blue Mountain, ON L9Y 0S2"},
                    {marker: new google.maps.LatLng (44.515848, -80.332482), info: "Craigleith Ski Club", address: "164 Craigleith Rd, Blue Moutain, ON L9Y 0S4"}];
  
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(44.515848, -80.332482),
      zoom: 10
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    addMarkersToMap(mainWedding);
  }

  function addMarkersToMap(markers) {
      // Clear all markers currently on the map
      if (_currentMarkers != null && _currentMarkers.length > 0) { 
          clearMarkers(_currentMarkers);
      }

      // Add new markers to the map and calculate new bounds
      var bounds = new google.maps.LatLngBounds();
      var infoWindow = null;

      $.each(markers, function(index, value) {
          var marker = new google.maps.Marker({position: value.marker, map: map, animation: google.maps.Animation.DROP, icon: 'images/wedding-marker.png'});
          _currentMarkers.push(marker);
          bounds.extend(value.marker);
          google.maps.event.addListener(marker, 'click', function() {
              if (infoWindow) {
                infoWindow.close();
              }
              infoWindow = new google.maps.InfoWindow();
              var mapsLink = "http://maps.google.com/?q=" + value.address;
              infoWindow.setContent('<a href=' + '"' + mapsLink + '"' + 'style="font-weight: bold; color: #ED943D;" target="_blank;">' + value.info + '</a><div style="font-size: 12px; color: #999;">' + value.address + '</div>');
              infoWindow.open(map, marker);
          });
      });
      map.fitBounds(bounds);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});