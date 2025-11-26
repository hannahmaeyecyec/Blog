// Initialize the map and set its view
var map = L.map('map').setView([8.1570, 124.9720], 13);

// Load and display tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([8.1570, 124.9720]).addTo(map);

// Popup message
marker.bindPopup("<b>Location</b><br>This is the pinned area.").openPopup();
