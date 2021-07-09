//Below code was gotten from Google Maps JavaScript website on Place Autocomplete Hotel Search
//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript


let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = {
    country: ["es", "it", "mx", "th", "tr"],
};
const MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
const countries = {

    es: {
        center: {
            lat: 40.5,
            lng: -3.7
        },
        zoom: 5,
    },

    ie: {
        center: {
            lat: 53.08,
            lng: -8.35
        },
        zoom: 5,
    },
    it: {

        center: {
            lat: 42.83,
            lng: 12.54
        },
        zoom: 5,
    },
    mx: {
        center: {
            lat: 23.73,
            lng: -102.78
        },
        zoom: 5,
    },
    th: {
        center: {

            lat: 15.52,
            lng: 101.04
        },
        zoom: 5,
    },
    tr: {
        center: {

            lat: 38.97,
            lng: 35.40
        },
        zoom: 5,
    },
};

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: countries["ie"].zoom,
        center: countries["ie"].center,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false,
    });
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById("info-content"),
    });
    // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"), {
            types: ["(cities)"],
            componentRestrictions: countryRestrict,
        }
    );
    places = new google.maps.places.PlacesService(map);

    autocomplete.addListener("place_changed", onPlaceChanged);
    // Add a DOM event listener to react when the user selects a country.
    document
        .getElementById("country")
        .addEventListener("change", setAutocompleteCountry);
        
}


// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
    const place = autocomplete.getPlace();

    if (place.geometry && place.geometry.location) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        search();
    } else if (!place.geometry || !place.geometry.location) {
        const error = document.getElementById("error").innerHTML = "The city name for the selected country is not valid, please enter a correct name.";
        return;
    } else {
        document.getElementById("autocomplete").placeholder = "Enter a city";
    }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
    const search = {
        bounds: map.getBounds(),
        types: ["lodging"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            clearResults();
            clearMarkers();

            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a hotel marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}
//Clears all the markers from the map when this function is called
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
    const country = document.getElementById("country").value;

    autocomplete.setComponentRestrictions({
        country: country
    });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);

    clearResults();
    clearMarkers();
}
//function that adds markers to the map
function dropMarker(i) {
    return function () {
        markers[i].setMap(map);
    };
}

function addResult(result, i) {
    const results = document.getElementById("results");
    const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    const markerIcon = MARKER_PATH + markerLetter + ".png";
    const tr = document.createElement("tr");
    tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";

    tr.onclick = function () {
        google.maps.event.trigger(markers[i], "click");
    };
    const iconTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const icon = document.createElement("img");
    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");
    const name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
}

function clearError() {
    const error = document.getElementById("error");

    while (error.childNodes[0]) {
        error.removeChild(error.childNodes[0]);
    }
}

function clearResults() {
    const results = document.getElementById("results");

    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

// Get the place details for a hotel.attraction or landmark. Show the information in an info window,
// anchored on the marker  that the user has searched for.
function showInfoWindow() {
    const marker = this;
    places.getDetails({
            placeId: marker.placeResult.place_id
        },
        (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
        }
    );
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML =
        '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
    document.getElementById("iw-url").innerHTML =
        '<b><a href="' + place.url + '">' + place.name + "</a></b>";
    document.getElementById("iw-address").textContent = place.vicinity;

    if (place.formatted_phone_number) {
        document.getElementById("iw-phone-row").style.display = "";
        document.getElementById("iw-phone").textContent =
            place.formatted_phone_number;
    } else {
        document.getElementById("iw-phone-row").style.display = "none";
    }

    // Assign a five-star rating to the marker, using a black star ('&#10029;')
    // to indicate the rating the marker has earned, and a white star ('&#10025;')
    // for the rating points not achieved.
    if (place.rating) {
        let ratingHtml = "";

        for (let i = 0; i < 5; i++) {
            if (place.rating < i + 0.5) {
                ratingHtml += "&#10025;";
            } else {
                ratingHtml += "&#10029;";
            }
            document.getElementById("iw-rating-row").style.display = "";
            document.getElementById("iw-rating").innerHTML = ratingHtml;
        }
    } else {
        document.getElementById("iw-rating-row").style.display = "none";
    }

    // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.
    if (place.website) {
        let fullUrl = place.website;
        let website = String(hostnameRegexp.exec(place.website));

        if (!website) {
            website = "http://" + place.website + "/";
            fullUrl = website;
        }
        document.getElementById("iw-website-row").style.display = "";
        document.getElementById("iw-website").textContent = website;
    } else {
        document.getElementById("iw-website-row").style.display = "none";
    }

}
//removes the text in the enter a city field that the user has entered
//below function code gotten from here:https://github.com/eldowling/holiday-search-google-maps
function clearSearch() {
    document.getElementById("autocomplete").value = "";
    document.getElementById("country").options[0].selected = true;
}
//calls on the functions clearResults(),clearSearch() and clearError() in addition to setting the map view back to the default location of the country Spain
function clearAll() {

    clearResults();
    clearSearch();
    clearError();
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: countries["ie"].zoom,
        center: countries["ie"].center,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false,
    });
}