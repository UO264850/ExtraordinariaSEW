var mapaDinamicoGoogle = new Object();
function initMap(){
    var oviedo = {lat: 43.3672702, lng: -5.8502461};
    var mapaOviedo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});
    var marcador = new google.maps.Marker(navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this)));
    var marcador2 = new google.maps.Marker(oviedo.lat, oviedo.lon);
}
mapaDinamicoGoogle.initMap = initMap;