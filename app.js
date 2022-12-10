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

//

// submit button
document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    console.log(business)
})