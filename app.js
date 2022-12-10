// ask location

const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// leaflet map

  var map = L.map('map').setView([33.765593, -118.192727], 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// YOU ARE HERE
var marker = L.marker([33.766612, -118.183518]).addTo(map)
.bindPopup('<p1><b>You are here</b><br></p1>')
.openPopup()
// YOU ARE HERE

//foursquare

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq30uycDAde0Ji+uTd3T7KhA1cV/dMlz68B2VlXhr9eHCY='
    }
  };
  
  fetch('https://api.foursquare.com/v3/places/search?query=business&ll=33.765551%2C-118.192763&limit=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

//foursquare

//arrays

  




//arrays

// submit button
document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    console.log(business)
})

// coordinates click
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
// coordinates click