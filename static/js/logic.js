// var API_KEY = config.api_key;
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 2,
    });
var apikey = config.API_KEY
console.log(apikey);
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: apikey
    }).addTo(map);

var baseMaps = {
    "Light Map": lightmap
    //   "Dark Map": darkmap
    };