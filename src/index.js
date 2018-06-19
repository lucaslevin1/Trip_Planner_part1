const mapboxgl = require("mapbox-gl");
const marker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoicHJpbmNlNzQ3NSIsImEiOiJjamltNW9senkwMG11M3ZwYTdlbXFqZG5wIn0.ArhavAQe3Ph-lhxWbm2mMg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
})

// const marker1 = document.getElementById('marker1');

// new mapboxgl.Marker(`<img src='http://i.imgur.com/WbMOfMl.png' />`).setLngLat([-74.009151, 40.705086]).addTo(map);


new marker('hotel', [-74.009151, 40.705086]).createMarker().addTo(map);
// console.log(marker1);

//new mapboxgl.marker(type, coordinates).addTo(map)
