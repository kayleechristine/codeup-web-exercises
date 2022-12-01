"use strict";
(function() {

// Creates the Map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v9', // style URL
        zoom: 15, // starting zoom
        center: [-96.781055, 32.784105] // starting position [lng, lat]
    });

// My Favorite Restaurants
    let restaurants = [
        {
            name: "Allgood Cafe",
            location: [-96.780709, 32.784360],
            type: "Brunch Spot",
            image: "img/breakfast.png"
        },
        {
            name: "Revolver Taco Lounge",
            location: [-96.784189, 32.784003],
            type: "Taco Bar",
            image: "img/taco.png"
        },
        {
            name: "Brick & Bones",
            location: [-96.784171, 32.784795],
            type: "Fried Chicken",
            image: "img/chicken.png"
        },
        {
            name: "Twisted Root",
            location: [-96.785498, 32.783071],
            type: "Burger Joint",
            image: "img/burger.png"
        },
        {
            name: "Emporium Pies",
            location: [-96.783646, 32.783719],
            type: "Pie Shop",
            image: "img/pie.png"
        }
    ];

// Generates Markers & Popups
    let marker;
    restaurants.forEach(function (restaurant) {
        let popup = new mapboxgl.Popup()
            .setHTML(`<div class="popup"><img src="${restaurant.image}" style="width: 50px; margin: auto;"><h3>${restaurant.name}</h3> <p>${restaurant.type}</p></div>`);
        marker = new mapboxgl.Marker()
            .setLngLat(restaurant.location)
            .addTo(map)
            .setPopup(popup);
    });

})();