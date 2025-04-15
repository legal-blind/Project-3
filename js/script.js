function initMap() {
  const center = { lat: 41.5834, lng: -87.2540 }; // Hobart, IN
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
  });

  // Custom Marker
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Our Main Office",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    },
  });

  // Info Window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Our Main Office</h3><p>Come visit us!</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  // Directions Link
  const directionsLink = document.createElement("a");
  directionsLink.href = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
  directionsLink.textContent = "Get Directions";
  directionsLink.target = "_blank";
  document.body.appendChild(directionsLink);
}
