var leafletMap = L.map('mapleaflet').setView([-40.32960544040074, 175.54043403514186], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletMap);

var marker = L.marker([-39.23396001626137, 174.07108242692857],
    {alt: 'Kyiv'}).addTo(leafletMap) // "Kyiv" is the accessible name of this marker
    .bindPopup('Mount Taranaki');

var marker = L.marker([-35.25230829297519, 174.0509438581697],
    {alt: 'Kyiv'}).addTo(leafletMap) // "Kyiv" is the accessible name of this marker
    .bindPopup('Bay of Islands');

var marker = L.marker([-45.80894140138561, 170.55531221630557],
    {alt: 'Kyiv'}).addTo(leafletMap) // "Kyiv" is the accessible name of this marker
    .bindPopup('Mount Cargill');
    
var marker = L.marker([-37.51969666094938, 177.18055745872172],
    {alt: 'Kyiv'}).addTo(leafletMap) // "Kyiv" is the accessible name of this marker
    .bindPopup('White Island');

var marker = L.marker([-38.74639013386584, 175.9016015878801],
    {alt: 'Kyiv'}).addTo(leafletMap) // "Kyiv" is the accessible name of this marker
    .bindPopup('Vulkaan Taupo');


var maplibreMap = new maplibregl.Map({
container: 'maplibre',
style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
center: [175, -40], // starting position [lng, lat]
zoom: 4 // starting zoom
});

var marker = new maplibregl.Marker()
    .setLngLat([175, -40])
    .addTo(maplibreMap);

var Openlayersmap = new ol.Map({
        target: 'mapopenlayers',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([175, -40]),
          zoom: 4
        })
      });

      const apiKey = "AAPK5c78e5451eb949f4a982dfb60df126a7SLUVz2NxvqvIsdujWoj-a9eJ7lCKBmewLde64eXzYGHi9euJxoJe5DIZLa20Vb5X";

      const basemapId = "ArcGIS:Streets";

      const basemapURL = "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/" + basemapId + "?type=style&token=" + apiKey;

      olms(Openlayersmap, basemapURL);

     
maptilersdk.config.apiKey = 'SWFbcnIZETe2JZCNcnKN';
  const Maptilermap = new maptilersdk.Map({
    container: 'mapmaptiler', // container's id or the HTML element to render the map
    style: "basic-v2",
    center: [175, -40], // starting position [lng, lat]
    zoom: 4, // starting zoom
  });

  


 
    