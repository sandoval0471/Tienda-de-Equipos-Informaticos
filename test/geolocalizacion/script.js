function geolocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo_success);
    } else {
        alert("Geolocalización no soportada en su navegador");
    }
}

function geo_success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    mapa(lon, lat, accuracy);
}

function mapa(longitude, latitude, accuracy) {

    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}

window.onload = geolocalizacion();