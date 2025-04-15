// This function runs once the Google Maps API script is loaded
 function loadMap() {
   // 1. Map options object
   const mapOptions = {
     center: { lat: 41.5834, lng: -87.2540 }, // Example location
     zoom: 13,
     mapTypeId: google.maps.MapTypeId.ROADMAP,
   };
 // 2. Container element (DOM element)
   const mapContainer = document.getElementById("map");
 // 3. Create the map
   const map = new google.maps.Map(mapContainer, mapOptions);
 // Optional: Add a custom marker
   const marker = new google.maps.Marker({
     position: mapOptions.center,
     map: map,
     title: "Our Location",
     icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
  });
}
 // No need for DOMContentLoaded — Google calls loadMap via callback once the script loads
