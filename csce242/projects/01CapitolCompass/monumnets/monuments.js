// PROJECT PART 7 - JSON FILE PARSING
// The Monuments & Memorials list is no longer written in the html. It is read from a json file
// on GitHub, parsed, and every card on this page is built with JavaScript.
// The json file: https://carterthreatt.github.io/json/monuments.json

const base_url = "https://carterthreatt.github.io/json/";

const getMonuments = async () => {
    const url = `${base_url}monuments.json`;
    const response = await fetch(url);
    return response.json();
};

// Makes an element with text and an optional class so the code below stays short
const makeElement = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) {
        element.classList.add(className);
    }
    return element;
};

// Every card gets the class "monument" plus the filters from the json (presidential, war, open24, tickets)
const addFilterClasses = (element, monument) => {
    element.classList.add("monument");
    monument.filters.forEach((filter) => {
        element.classList.add(filter);
    });
};

const makeImage = (monument) => {
    const img = document.createElement("img");
    img.src = `images/${monument.img_name}`;
    img.alt = monument.img_alt;
    return img;
};

// One column of the hours / nearest metro / time needed row
const makeMetaItem = (label, value) => {
    const item = document.createElement("div");
    item.append(makeElement("span", label, "meta-label"));
    item.append(makeElement("span", value, "meta-value"));
    return item;
};

// The big card in the Start Here slideshow
const getSlide = (monument) => {
    const slide = makeElement("div", "", "slide");
    addFilterClasses(slide, monument);

    const card = makeElement("div", "", "feature-card");
    card.append(makeImage(monument));

    const body = makeElement("div", "", "feature-card-body");

    const badges = makeElement("div", "", "tag-badges");
    monument.badges.forEach((badge) => {
        badges.append(makeElement("span", badge, "tag-badge"));
    });
    body.append(badges);

    body.append(makeElement("p", monument.category, "landmark-tag"));
    body.append(makeElement("h3", monument.name));
    body.append(makeElement("p", monument.description, "feature-desc"));

    const metaRow = makeElement("div", "", "meta-row");
    metaRow.append(makeMetaItem("HOURS", monument.hours));
    metaRow.append(makeMetaItem("NEAREST METRO", monument.metro));
    metaRow.append(makeMetaItem("TIME NEEDED", monument.time_needed));
    body.append(metaRow);

    // Only some monuments have callout boxes or a ticket link
    if (monument.callouts) {
        monument.callouts.forEach((callout) => {
            body.append(makeElement("div", callout, "callout"));
        });
    }

    if (monument.link) {
        const p = document.createElement("p");
        const a = makeElement("a", monument.link.text, "btn-copy");
        a.href = monument.link.url;
        a.target = "_blank";
        p.append(a);
        body.append(p);
    }

    card.append(body);
    slide.append(card);
    return slide;
};

// The Prev / dots / Next row under the slideshow
const getSlideshowControls = (slideCount) => {
    const controls = makeElement("div", "", "slideshow-controls");

    const prev = makeElement("button", "‹ Prev", "slideshow-btn");
    prev.classList.add("slideshow-prev");
    prev.setAttribute("aria-label", "Previous stop");

    const dots = makeElement("div", "", "slideshow-dots");
    for (let i = 0; i < slideCount; i++) {
        const dot = makeElement("span", "", "dot");
        if (i == 0) {
            dot.classList.add("active");
        }
        dots.append(dot);
    }

    const next = makeElement("button", "Next ›", "slideshow-btn");
    next.classList.add("slideshow-next");
    next.setAttribute("aria-label", "Next stop");

    controls.append(prev);
    controls.append(dots);
    controls.append(next);
    return controls;
};

// The smaller cards in The Rest of The District
const getLandmarkCard = (monument) => {
    const card = makeElement("div", "", "one");
    card.classList.add("landmark-card");
    addFilterClasses(card, monument);

    card.append(makeImage(monument));

    const body = makeElement("div", "", "landmark-card-body");
    body.append(makeElement("p", monument.category, "landmark-tag"));
    body.append(makeElement("h3", monument.name));
    body.append(makeElement("p", monument.description, "landmark-desc"));
    body.append(makeElement("p", `${monument.hours} - ${monument.tickets} - ${monument.time_needed}`, "landmark-meta"));
    card.append(body);

    return card;
};

const showMonuments = async () => {
    const slideshow = document.getElementById("start-here-slideshow");
    const district = document.getElementById("district-list");

    let monuments;
    try {
        monuments = await getMonuments();
    } catch (error) {
        const message = "Sorry, the monuments could not be loaded right now. Please refresh the page.";
        slideshow.append(makeElement("p", message));
        return;
    }

    let slideCount = 0;
    monuments.forEach((monument) => {
        if (monument.section == "start-here") {
            slideshow.append(getSlide(monument));
            slideCount++;
        } else {
            district.append(getLandmarkCard(monument));
        }
    });

    // The first slide is the one showing when the page opens
    slideshow.querySelector(".slide").classList.add("active");
    slideshow.append(getSlideshowControls(slideCount));

    // The "All" button shows how many monuments came out of the json file
    document.querySelector('.filter-btn[value="all"]').textContent = `All ${monuments.length}`;

    // setUpSlideshows is in homepage.js, it has to wait until the slides exist
    setUpSlideshows();
};

showMonuments();
