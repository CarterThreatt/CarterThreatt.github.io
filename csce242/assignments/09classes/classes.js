class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getImagePath() {
        return `images/${this.image}`;
    }

    // Builds the card that goes in the gallery, clicking it opens the popup
    getCard() {
        const card = makeElement("section", "", "vacation-card");
        card.append(makeElement("h3", this.title));
        card.append(makeElement("p", `${this.type} Vacation`));

        const img = document.createElement("img");
        img.src = this.getImagePath();
        img.alt = this.title;
        card.append(img);

        card.onclick = (e) => {
            showModal(this);
        };

        return card;
    }
}

// Makes an element with text and an optional class so the code below stays short
const makeElement = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) {
        element.classList.add(className);
    }
    return element;
};

const createVacations = () => {
    const vacations = [];

    vacations.push(new Vacation(
        "Asheville",
        "Mountain",
        "A lively Blue Ridge city known for its art scene, craft breweries, and mountain views in every direction.",
        "Tour the Biltmore Estate, drive the Blue Ridge Parkway, and explore the River Arts District.",
        "asheville.jpg",
        "https://maps.google.com/maps?q=Asheville,+NC&z=11&output=embed"
    ));

    vacations.push(new Vacation(
        "Boone",
        "Mountain",
        "A friendly college town in the Blue Ridge Mountains with cool summers and snowy winters.",
        "Ski at Appalachian Ski Mountain, hike Rocky Knob Park, and browse the shops on King Street.",
        "boone.jpg",
        "https://maps.google.com/maps?q=Boone,+NC&z=12&output=embed"
    ));

    vacations.push(new Vacation(
        "Blowing Rock",
        "Mountain",
        "A small village on the Blue Ridge Parkway named after a cliff where the wind blows light objects back up.",
        "Visit The Blowing Rock, hike Moses H. Cone Memorial Park, and walk down Main Street.",
        "blowing-rock.jpg",
        "https://maps.google.com/maps?q=Blowing+Rock,+NC&z=13&output=embed"
    ));

    vacations.push(new Vacation(
        "Table Rock",
        "Mountain",
        "A state park in the South Carolina foothills built around a huge granite dome.",
        "Hike the Table Rock Trail, paddle on Pinnacle Lake, and camp or picnic in the park.",
        "table-rock.jpg",
        "https://maps.google.com/maps?q=Table+Rock+State+Park,+SC&z=12&output=embed"
    ));

    vacations.push(new Vacation(
        "Edisto Beach",
        "Beach",
        "A quiet, family friendly island south of Charleston with wide beaches and very little development.",
        "Hunt for shells and shark teeth, kayak the ACE Basin, and visit Edisto Beach State Park.",
        "edisto-beach.jpg",
        "https://maps.google.com/maps?q=Edisto+Beach,+SC&z=12&output=embed"
    ));

    vacations.push(new Vacation(
        "Pawleys Island",
        "Beach",
        "A laid back island on the Grand Strand known for its rope hammocks and old oceanfront cottages.",
        "Relax on the beach, go crabbing in the creek, and tour nearby Brookgreen Gardens.",
        "pawleys-island.jpg",
        "https://maps.google.com/maps?q=Pawleys+Island,+SC&z=13&output=embed"
    ));

    vacations.push(new Vacation(
        "Folly Beach",
        "Beach",
        "A surf town near Charleston that calls itself the Edge of America.",
        "Watch the surfers at the Washout, walk out on the Folly Beach Pier, and look for the Morris Island Lighthouse.",
        "folly-beach.jpg",
        "https://maps.google.com/maps?q=Folly+Beach,+SC&z=12&output=embed"
    ));

    vacations.push(new Vacation(
        "Myrtle Beach",
        "Beach",
        "A busy resort city with about 60 miles of beach along the Grand Strand.",
        "Walk the Boardwalk, ride the SkyWheel, and play a round of mini golf.",
        "myrtle-beach.jpg",
        "https://maps.google.com/maps?q=Myrtle+Beach,+SC&z=11&output=embed"
    ));

    return vacations;
};

// Adds a card for every vacation in the array to the gallery
const loadGallery = (vacations) => {
    const gallery = document.getElementById("gallery");

    vacations.forEach((vacation) => {
        gallery.append(vacation.getCard());
    });
};

// Fills the popup with the data from the vacation that was clicked and shows it
const showModal = (vacation) => {
    document.getElementById("modal-title").textContent = vacation.title;
    document.getElementById("modal-type").textContent = vacation.type;
    document.getElementById("modal-description").textContent = vacation.description;
    document.getElementById("modal-things").textContent = vacation.thingsToDo;
    document.getElementById("modal-map").src = vacation.mapSrc;
    document.getElementById("vacation-modal").style.display = "block";
};

// Hides the popup and clears the map so it stops loading
const closeModal = () => {
    document.getElementById("vacation-modal").style.display = "none";
    document.getElementById("modal-map").removeAttribute("src");
};

window.onload = () => {
    loadGallery(createVacations());

    document.getElementById("modal-close").onclick = (e) => {
        closeModal();
    };

    // Clicking the dark area outside the popup closes it too
    document.getElementById("vacation-modal").onclick = (e) => {
        if (e.target.id == "vacation-modal") {
            closeModal();
        }
    };
};
