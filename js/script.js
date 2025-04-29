function initMap() {
  // Illinois Institute of Technology
  const iit = { lat: 41.8349, lng: -87.6270 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: iit,
  });

  // Marker 1: IIT - The School
  const markerIIT = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
  });

  const infoIIT = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>The school</p>",
  });

  markerIIT.addListener("click", () => {
    infoIIT.open(map, markerIIT);
  });

  // Marker 2: Tuft Stuff - Mother's Day
  const tuftStuff = { lat: 41.8781, lng: -87.6298 }; // Approximate center of Chicago

  const markerTuft = new google.maps.Marker({
    position: tuftStuff,
    map: map,
    title: "Tuft Stuff",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/pink-dot.png",
    },
  });

  const infoTuft = new google.maps.InfoWindow({
    content: "<h3>Tuft Stuff</h3><p>This is where I'm taking my mom for Mother's Day.</p>",
  });

  markerTuft.addListener("click", () => {
    infoTuft.open(map, markerTuft);
  });

  // Marker 3: I am PoPCorn - First Job
  const popcorn = { lat: 41.5645, lng: -87.5017 }; // Munster, IN

  const markerPopcorn = new google.maps.Marker({
    position: popcorn,
    map: map,
    title: "I am PoPCorn",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
    },
  });

  const infoPopcorn = new google.maps.InfoWindow({
    content: "<h3>I am PoPCorn</h3><p>My first job.</p>",
  });

  markerPopcorn.addListener("click", () => {
    infoPopcorn.open(map, markerPopcorn);
  });

  // Directions link (optional — points to IIT)
  const directionsLink = document.createElement("a");
  directionsLink.href = `https://www.google.com/maps/dir/?api=1&destination=${iit.lat},${iit.lng}`;
  directionsLink.textContent = "Get Directions to IIT";
  directionsLink.target = "_blank";
  document.body.appendChild(directionsLink);
}
