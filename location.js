// Instantiate a map and platform object:
var platform = new H.service.Platform({
    'apikey': 'TPMtfvhqpBwPZyV1k4EclRoQbI1_suFjx16oEkn-d58'
  });
  // Retrieve the target element for the map:
  var targetElement = document.getElementById('mapContainer');
  
  // Get default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
    zoom: 10,
    center: { lat: 52.51, lng: 13.4 }
    });
  
  // Create the parameters for the geocoding request:
  var geocodingParams = {
      searchText: '200 S Mathilda Ave, Sunnyvale, CA'
    };
  
  // Define a callback function to process the geocoding response:
  var onResult = function(result) {
    var locations = result.Response.View[0].Result,
      position,
      marker;
    // Add a marker for each location found
    for (i = 0;  i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    marker = new H.map.Marker(position);
    map.addObject(marker);
    }
  };
  
  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();
  
  // Call the geocode method with the geocoding parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  geocoder.geocode(geocodingParams, onResult, function(e) {
    alert(e);
  });


/* 
  https://maps.googleapis.com/maps/api/geocode/json?address=25+JP Software Park+Electronics City,+Phase-1+Hosur Road,+Bengaluru+Karnataka&key=AIzaSyCt2uP4rYM57HvYTeul0M5TduxYN69EYqE

Plot No. 25, JP Software Park, Electronics City, Phase-1, Hosur Road, Bengaluru, Karnataka 560100

https://www.google.com/mapmaker?hl=en&gw=40&output=jsonp&ll=38.934911%2C-92.329359&spn=0.016288%2C0.056477&z=14&mpnum=0&vpid=1354239392511&editids=nAlkfrzSpBMuVg-hSJ&xauth=YOUR_XAUTH_HERE&geowiki_client=mapmaker&hl=en
 */