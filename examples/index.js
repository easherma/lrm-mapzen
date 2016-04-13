var map = L.map('map');

// Using Tangram
var layer = Tangram.leafletLayer({
  scene: 'https://cdn.rawgit.com/tangrams/refill-style/gh-pages/refill-style.yaml',
  attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
});
layer.addTo(map);


// You can also use normal OSM tiles instead of Tangram
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

var control = L.Routing.control({
  waypoints: [
    L.latLng(37.752, -122.418),
    L.latLng(37.779, -122.391)
  ],
  lineOptions: {
    styles: [
      {color: 'black', opacity: 0.15, weight: 9},
      {color: 'white', opacity: 0.8, weight: 6},
      {color: 'blue', opacity: 1.0, weight: 2}
    ]
  },
  geocoder: L.Control.Geocoder.mapzen('search-RH8pVLv'),
  reverseWaypoints: true,
  // You can get your own Valhalla API key from the Mapzen developer portal (https://mapzen.com/developers/)
  router: L.Routing.mapzen('valhalla-PVA4Y8g', 'multimodal'),
  formatter: new L.Routing.Mapzen.Formatter(),
  summaryTemplate:'<div class="start">{name}</div><div class="info {transitmode}">{distance}, {time}</div>'
}).addTo(map);

L.Routing.errorControl(control).addTo(map);