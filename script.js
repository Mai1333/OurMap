var map = L.map('map', {
    center: [53.273813, -9.046976],
    zoom: 20
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


////////////////////////////////////////////////////////////////////////////////////////////////
var marker = L.marker([53.273773, -9.047005]).addTo(map);

var circle = L.circle([53.273773, -9.047005], {
    color: 'pink',
    fillColor: '#f5aed8',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);

marker.bindPopup("Where we first met :)");

///////////////////////////////////////////////////////////////////////////////////////////////

var eyresquaremarker = L.marker([53.274318, -9.049020]).addTo(map);
var circle = L.circle([53.274318, -9.049020], {
    color: 'pink',
    fillColor: '#f5aed8',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);

eyresquaremarker.bindPopup("Met her down in Eyre Square, golden hair, Galway air, eyes shone so bright, like Salthill at night...");

////////////////////////////////////////////////////////////////////////////////////////////////

var nanasteamarker = L.marker([53.271564, -9.053614]).addTo(map);
var circle = L.circle([53.271564, -9.053614], {
    color: 'pink',
    fillColor: '#f5aed8',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);

nanasteamarker.bindPopup("Where we got boba and a waffle and my diet coke exploded everywhere");




function home() {
    map.setView([53.273813, -9.046976], 20);
}

function bus() {
    map.setView([53.273773, -9.047005], 20);
}

function eyresquare() {
    map.setView([53.274318, -9.049020], 20);
}

function nanastea() {
    map.setView([53.271564, -9.053614], 20);
}

function surprise() {
    let person = prompt("Who's the love of your life?");    
    if (person == "frida" || person == "Frida" || person == "FRIDA" || person == "Fridagurn" || person == "fridagurn" || person == "FRIDAGURN" || person == "Frida gurn" || person == "frida gurn" || person == "FRIDA GURN") {
        alert("Correct answer! You win!");
} else {
        alert("Wrong answer! You lose!");
}
}


    // var polygon = L.polygon([
    //     [51.509, -0.08],
    //     [51.503, -0.06],
    //     [51.51, -0.047]
    // ]).addTo(map);

    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    // circle.bindPopup("I am a circle.");
    // polygon.bindPopup("I am a polygon.");

    // var popup = L.popup()
    //     .setLatLng([51.513, -0.09])
    //     .setContent("I am a standalone popup.")
    //     .openOn(map);

    
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);
