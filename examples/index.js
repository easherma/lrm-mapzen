var map = L.map('map');

// Using Tangram
var layer = Tangram.leafletLayer({
  scene: 'https://cdn.rawgit.com/tangrams/zinc-style/gh-pages/zinc-style.yaml',
  attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
});
layer.addTo(map);


// You can also use normal OSM tiles instead of Tangram
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(40.73229952965295, -73.99532318115234),
    L.latLng(40.70237457404695, -73.94330978393555)
  ],
  // You can get your own Valhalla API key from the Mapzen developer portal (https://mapzen.com/developers/)
  router: L.Routing.mapzen('valhalla-PVA4Y8g', 'multimodal'),
  formatter: new L.Routing.Mapzen.Formatter(),
  summaryTemplate:'<div class="start">{name}</div><div class="info {transitmode}">{distance}, {time}</div>'
}).addTo(map);
