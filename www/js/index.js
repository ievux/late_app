var whereAreWe = function() {
    // Ask the device for the position;
    // When we found it run the function ‘updatePosition’ (a ‘callback’)
    
   navigator.geolocation.getCurrentPosition(updatePosition);
}

var updatePosition = function(position) {
    // Get the element with the id ‘location’
    // In this element, put everything we know about the coordinates of the position
    
    var locationElement = document.querySelector('#location');

    locationElement.innerHTML = JSON.stringify(position.coords, null, 2);
}
var initialize = function() {
    // When the event `deviceready` is triggered,
    // (when the Cordova functions have iniated)
    // run the function `showReady`
    
    document.addEventListener('deviceready', whereAreWe, false);
}
