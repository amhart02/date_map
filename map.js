import places from "../places.mjs";

let infoWindowInstance = null;

// map and markers
async function createMarker(place, map) {
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    const position = {
        lat: parseFloat(place.coordinates.split(",")[0]),
        lng: parseFloat(place.coordinates.split(",")[1]),
    };

    const content = document.createElement('div');
    content.innerHTML = `<div><strong>${place.title}</strong><br>
        <p>${place.information}</p>
        <a href="${place.website_link}">${place.title} Website</a>
    `;

    let iconUrl;
    if (place.tag === "Free") {
        iconUrl = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"; 
    } else if (place.tag === "Purchase") {
        iconUrl = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
    }

    const icon = document.createElement("img");
    icon.src = iconUrl;
    icon.style.width = "24px";
    icon.style.height = "24px";

    const marker = new AdvancedMarkerElement({
        position,
        map,
        title: place.title,
        content: icon
    })

    const infoWindow = new google.maps.InfoWindow({
        content: content,
    });

    marker.addListener('click', () => {
        if (infoWindowInstance) {
            infoWindowInstance.close();  
        }
        infoWindow.open(map, marker);
        infoWindowInstance = infoWindow;
    });

}

function renderMap(places) {
    const mapElement = document.createElement('div');
    mapElement.style.height = '400px';
    mapElement.style.width = '1000px';
    mapElement.style.margin = "0 auto";

    const map = new google.maps.Map(mapElement, {
        center: { lat: 43.8260, lng: -111.7897 },  
        zoom: 9.5,
        mapTypeId: 'roadmap',
        mapId: 'DEMO_MAP_ID',
    });
    
    places.forEach((place) => createMarker(place, map, infoWindowInstance));

    // create map legend
    const legend = document.createElement('div');
    legend.className = 'map-legend';
    legend.innerHTML = `<h4>Legend</h4>
        <div><img src="http://maps.google.com/mapfiles/ms/icons/pink-dot.png" alt="Pink Marker"> Free</div>
        <div><img src="http://maps.google.com/mapfiles/ms/icons/purple-dot.png" alt="Purple Marker"> Purchase</div>
    `;
    legend.style.bottom = '10px';
    legend.style.left = '275px';  

    const mapContainer = document.createElement('div');
    mapContainer.style.position = 'relative';
    mapContainer.appendChild(mapElement);
    mapContainer.appendChild(legend);

    document.querySelector('main').insertAdjacentElement("afterbegin", mapContainer);
}

// places list on the bottom of the page
function placeTemplate(place) {
    return `<div class="place">
        <div class="section-1">
            <h3>${place.title}</h3>
            <p>${place.location}</p>
            <p>${place.information}</p>
            <a href="${place.website_link}">${place.title} Website</a>
        </div>
        <div class="section-2">
            <img src="${place.img}" alt="${place.title}">
            <p class="tag">${place.tag}</p>
        </div>
    </div>
    `;
}

function renderPlaces(places) {
    const placesDiv = document.querySelector(".places");
    const placesHTML = places.map(place => placeTemplate(place)).join("");
    placesDiv.innerHTML = placesHTML;
}

function init() {
    renderMap(places);
    renderPlaces(places);
}

init();
