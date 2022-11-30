"use strict";

// API Key
const MAPBOX_TOKEN = "pk.eyJ1Ijoia2F5bGVlY2hyaXN0aW5lIiwiYSI6ImNsYXF4dzVkbDFvMmkzb3Q3a3hvbjY5eWwifQ.kNDNcmM_XjUow6-di1yyTw";
const OPEN_WEATHER_APPID = "f0817a4ce29f6dc633fb41e280415439";

// Days of the Week
let weekday = [
    {id: 1, name: 'Monday'},
    {id: 2, name: 'Tuesday'},
    {id: 3, name: 'Wednesday'},
    {id: 4, name: 'Thursday'},
    {id: 5, name: 'Friday'},
    {id: 6, name: 'Saturday'},
    {id: 7, name: 'Sunday'}
];

// Weather Images
let wxPics = [
    {name: 'Clear Sky', img: 'img/wx/clear-sky.png'},
    {name: 'Few Clouds', img: 'img/wx/few-clouds.png'},
    {name: 'Scattered Clouds', img: 'img/wx/scattered-clouds.png'},
    {name: 'Broken Clouds', img: 'img/wx/broken-clouds.png'},
    {name: 'Overcast Clouds', img: 'img/wx/overcast-clouds.png'},
    {name: 'Drizzle', img: 'img/wx/drizzle.png'},
    {name: 'Rain', img: 'img/wx/rain.png'},
    {name: 'Thunderstorm', img: 'img/wx/thunderstorm.png'},
    {name: 'Snow', img: 'img/wx/snow.png'},
    {name: 'Mist', img: 'img/wx/mist.png'} // TODO: Make default image
];

// Current Day Weather
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "Dallas, US", // TODO: Make variable by location
    units: "imperial"
}).done(function(data) {
    // console.log('Current Weather', data);

    // Day of the Week
    let date = new Date(data.dt * 1000); // Local Time
    let day = weekday[date.getDay() - 1].name; // Day of the Week

    // Temperatures
    let low = Math.round(data.main.temp_min); // Low Temp
    let high = Math.round(data.main.temp_max); // High Temp

    // Details
    let img = data.weather[0].description.replace(' ', '-'); // Image
    let wx = data.weather[0].main; // Wx Description
    let humid = data.main.humidity; // Humidity
    let wind = data.wind.speed; // Wind Speed
    let press = data.main.pressure; // Pressure

    // Pushes to the Card
    $('#img-1').html(`<img src="img/wx/${img}.png" class="card-img-top">`);
    $('#day-1').html(day);
    $('#low-1').html(low);
    $('#high-1').html(high);
    $('#wx-1').html(wx); // TODO: More descriptive weather forecast
    $('#humid-1').html(humid);
    $('#wind-1').html(wind);
    $('#press-1').html(press);

});

// 5-day Forecast Test
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat:    32.806657,
    lon:   -97.054590, // TODO: Make variable by location
    units: "imperial",
}).done(function(data) {
    console.log('5 Day Forecast', data);

    // Convert UTC time to Local Time
    let date = new Date(data.list[0].dt * 1000);
    let hours = date.getHours();

    // Find the Next Day
    let offset = date.getTimezoneOffset() / 60; // # hours difference from local to UTC time
    let index = (((24 - offset) - hours) / 3) + 1; // Index of the next day's first weather report

    // Days Two - Five
    for (let i = 2; i <= 5; i++) {

        // Day of the Week
        let num = new Date(data.list[index + 1].dt * 1000); // Local Time
        let day = weekday[num.getDay() - 1].name; // Day of the Week
        // console.log(day);

        // Average Daily Temperatures // TODO: Calculate high & low temps
        let max = index + 8;
        let tempData = [];
        for (let i = index; i < max; i++) {
            tempData.push(data.list[i].main.temp);
        }



        // function highAndLow(numbers) {
        //     numbers = numbers.split(" ");
        //     return Math.max(...numbers) + " " + Math.min(...numbers);
        // }

        // Calculating Daily Averages
        let pressureData = [];
        for (let i = index; i < max; i++) {
            pressureData.push(data.list[i].main.pressure);
        }
        let humidityData = [];
        for (let i = index; i < max; i++) {
            humidityData.push(data.list[i].main.humidity);
        }
        let windData = [];
        for (let i = index; i < max; i++) {
            windData.push(data.list[i].wind.speed);
        }
        function findAverage(arr) {
            return arr.filter(num => num >= 0).reduce((sum, add) => sum + add, 0) / 8;
        }

        // Details
        let img = data.list[index].weather[0].description.replace(' ', '-'); // Image
        let wx = data.list[index].weather[0].main; // Wx Description
        let humid = findAverage(humidityData); // Humidity
        let wind = findAverage(windData); // Wind Speed
        let press = findAverage(pressureData); // Pressure
        // console.log('Index:', index, 'Wx:', img);

        // Pushes to the Card
        $(`#img-${i}`).html(`<img src="img/wx/${img}.png" class="card-img-top">`);
        $(`#day-${i}`).html(day);
        $(`#low-${i}`).html(Math.round(Math.min(...tempData)) + '°F');
        $(`#high-${i}`).html(Math.round(Math.max(...tempData)) + '°F');
        $(`#wx-${i}`).html(wx); // TODO: More descriptive weather forecast
        $(`#humid-${i}`).html(Math.round(humid));
        $(`#wind-${i}`).html(wind.toFixed(2));
        $(`#press-${i}`).html(Math.round(press));

        index += 8;

    }

});

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
// TODO: Toggle "Saved Locations" View on/off
// window.addEventListener("load", (event) => {
//     map.fitBounds([
//         [-120.163948, 32.742266], // San Diego
//         [-95.054590, 32.806657] // Dallas-Fort Worth
//     ]);
// });

// Toggle Current Location
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
    })
);

// Saved Locations
// TODO: Allow user to save locations for later
// let savedLocations = [
//     {
//         name: "San Diego",
//         location: [-96.780709, 32.784360],
//         weather: "Sunny",
//         image: "img/breakfast.png"
//     },
//     {
//         name: "Monterey",
//         location: [-96.784189, 32.784003],
//         type: "Overcast",
//         image: "img/taco.png"
//     },
//     {
//         name: "Dallas",
//         location: [-96.784171, 32.784795],
//         type: "Rainy",
//         image: "img/chicken.png"
//     }
// ];

// Generates Markers & Popups
// let marker;
// savedLocations.forEach(function(location){
//     let popup = new mapboxgl.Popup()
//         .setHTML(`<div class="popup"><img src="${location.image}" style="width: 50px; margin: auto;"><h3>${location.name}</h3> <p>${location.type}</p></div>`);
//     marker = new mapboxgl.Marker()
//         .setLngLat(location.location)
//         .addTo(map)
//         .setPopup(popup);
// });

// ******************************************************************************************************************//

// // Custom Coffee Functionality
// let addCoffee = function (e) {
//     e.preventDefault(); // doesn't submit the form, just updates the data
//     coffees.push( {
//         id: coffees.length + 1,
//         name: customName.value,
//         roast: customRoast.value,
//         img: customImg(customRoast.value)
//     });
//     console.log(`${customName.value} has been added to the inventory.`);
//     coffeeDiv.innerHTML = renderCoffees(coffees);
// }
//
// let customName = document.querySelector('#custom-name');
// let customRoast = document.querySelector('#custom-roast');
// let customSubmit = document.querySelector('#custom-submit');
// customSubmit.addEventListener('click', addCoffee);
//
// // Custom Coffee Placeholder Images
// function customImg(input) {
//     if (input === "Medium") {
//         return 'img/coffee_medium.webp';
//     } else if (input === "Dark") {
//         return 'img/coffee_dark.webp';
//     } else {
//         return 'img/coffee_light.webp';
//     }
// }
//
// // Populates the Coffee Selection
// function renderCoffee(coffee) {
//     let html = '<div class="card bg-transparent m-4 align-items-center" style="width: 18rem;">';
//     html += '<img src="' + coffee.img + '" class="card-img-top align-self-center mt-2" style="width: 17rem;" alt="coffee image">'; // TODO: img for coffees obj
//     html += '<div class="card-body coffees">';
//     html += '<h3 class="card-title">' + coffee.name + '</h3>';
//     html += '<p class="card-text">' + coffee.roast + ' Roast</p>';
//     html += '</div>';
//     html += '</div>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = 0; i < coffees.length; i++) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// let coffeeDiv = document.querySelector('#coffees');
// coffeeDiv.innerHTML = renderCoffees(coffees);
//
// // Updates the Coffee by Roast
// function updateCoffees(e) {
//     e.preventDefault(); // doesn't submit the form, just updates the data
//     let selectedRoast = roastSelection.value;
//     let filteredCoffees = [];
//     if (selectedRoast === "All") {
//         coffees.forEach(function(coffee){
//             if (coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
//                 filteredCoffees.push(coffee);
//             }
//         });
//     } else if (selectedRoast !== "All") {
//         coffees.forEach(function(coffee) {
//             if (coffee.roast === selectedRoast) {
//                 if (coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
//                     filteredCoffees.push(coffee);
//                 }
//             }
//         });
//     }
//
//     coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
// }
//
// let search = document.getElementById('search');
// search.addEventListener('keyup', updateCoffees);
// let roastSelection = document.querySelector('#roast-selection');
// roastSelection.addEventListener('change', updateCoffees);