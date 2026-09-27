
const mountains = [];
mountains["Asheville, NC"] = "https://maps.google.com/maps?q=Asheville,+NC&z=11&output=embed";
mountains["Blowing Rock, NC"] = "https://maps.google.com/maps?q=Blowing+Rock,+NC&z=13&output=embed";
mountains["Boone, NC"] = "https://maps.google.com/maps?q=Boone,+NC&z=12&output=embed";
mountains["Gatlinburg, NC"] = "https://maps.google.com/maps?q=Gatlinburg,+TN&z=12&output=embed";

const beaches = [];
beaches["Myrtle Beach, SC"] = "https://maps.google.com/maps?q=Myrtle+Beach,+SC&z=11&output=embed";
beaches["Surfside Beach, SC"] = "https://maps.google.com/maps?q=Surfside+Beach,+SC&z=12&output=embed";
beaches["Hilton Head Island, SC"] = "https://maps.google.com/maps?q=Hilton+Head+Island,+SC&z=11&output=embed";
beaches["Seabrook Island, SC"] = "https://maps.google.com/maps?q=Seabrook+Island,+SC&z=13&output=embed";

// Lets the select's value pick which array to use
const destinationTypes = [];
destinationTypes["mountains"] = mountains;
destinationTypes["beaches"] = beaches;

// Hides the map card and clears the map so nothing shows until a destination is chosen
const hideMap = () => {
    document.getElementById("map-card").hidden = true;
    document.getElementById("map").removeAttribute("src");
};

// Shows the map card for the destination that was clicked
const showMap = (name, url) => {
    document.getElementById("map-title").textContent = name;
    document.getElementById("map").src = url;
    document.getElementById("map-card").hidden = false;
};

// Builds one card with a link for each destination in the chosen array
const loadDestinations = (destinations) => {
    const section = document.getElementById("destinations");
    section.innerHTML = "";

    for (let name in destinations) {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = name;

        a.onclick = (e) => {
            e.preventDefault();
            showMap(name, destinations[name]);
        };

        h3.append(a);
        card.append(h3);
        section.append(card);
    }
};

window.onload = () => {
    // Load the destinations for the chosen type
    document.getElementById("destination-type").onchange = (e) => {
        hideMap();
        const destinations = destinationTypes[e.target.value];
        loadDestinations(destinations ? destinations : []);
    };
};