"use strict";

// API Key
const MAPBOX_TOKEN = "pk.eyJ1Ijoia2F5bGVlY2hyaXN0aW5lIiwiYSI6ImNsYXF4dzVkbDFvMmkzb3Q3a3hvbjY5eWwifQ.kNDNcmM_XjUow6-di1yyTw";

// Creates the Map
// TODO: Map centers on current location by default
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v9', // style URL
    zoom: 10, // starting zoom
    center: [-97.054590, 32.806657]
});

// Centers the Map
// TODO: Make a function to input the saved locations
window.addEventListener("load", (event) => {
    map.fitBounds([
        [-120.163948, 32.742266], // San Diego
        [-95.054590, 32.806657] // Dallas-Fort Worth
    ]);
});

// Saved Locations
let savedLocations = [
    {
        name: "San Diego",
        location: [-96.780709, 32.784360],
        weather: "Sunny",
        image: "img/breakfast.png"
    },
    {
        name: "Monterey",
        location: [-96.784189, 32.784003],
        type: "Overcast",
        image: "img/taco.png"
    },
    {
        name: "Dallas",
        location: [-96.784171, 32.784795],
        type: "Rainy",
        image: "img/chicken.png"
    }
];

// Generates Markers & Popups
let marker;
savedLocations.forEach(function(location){
    let popup = new mapboxgl.Popup()
        .setHTML(`<div class="popup"><img src="${location.image}" style="width: 50px; margin: auto;"><h3>${location.name}</h3> <p>${location.type}</p></div>`);
    marker = new mapboxgl.Marker()
        .setLngLat(location.location)
        .addTo(map)
        .setPopup(popup);
});