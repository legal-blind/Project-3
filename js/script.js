function initMap() {
  const center = { lat: 41.8349, lng: -87.6270 }; // Illinois Tech

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: center,
    mapTypeId: "roadmap",
  });

  const landmarks = [
    {
      position: { lat: 41.8349, lng: -87.6270 },
      title: "Illinois Institute of Technology",
      info: "The school I attend."
    },
    {
      position: { lat: 41.8781, lng: -87.6298 },
      title: "Tuft Stuff, Chicago IL",
      info: "This is where I'm taking my mom for Mother's Day."
    },
    {
      position: { lat: 41.5645, lng: -87.5017 },
      title: "I am PoPCorn, Munster IN",
      info: "My first job."
    }
  ];

  landmarks.forEach(({ position, title, info }) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${title}</h3><p>${info}</p>`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
