var whereAreWe = function() {
   navigator.geolocation.getCurrentPosition(updatePosition);
}

var updatePosition = function(position) {
    var locationElement = document.querySelector('#location');
    
    locationElement.innerHTML = JSON.stringify(position.coords, null, 2);
}
var initialize = function() {
    // When the event `deviceready` is triggered,
    // (when the Cordova functions have iniated)
    // run the function `showReady`
    document.addEventListener('deviceready', whereAreWe, false);
}
