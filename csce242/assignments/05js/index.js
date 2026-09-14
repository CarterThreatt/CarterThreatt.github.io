// Shows a speech bubble when the tile is clicked
document.getElementById("card-speech-bubble").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hi!";
    document.getElementById("p-message").classList.add("show");
};

// shows the selected beverage below the dropdown
document.getElementById("beverage-select").onchange = (e) => {
    if (e.target.value === "") {
        document.getElementById("beverage-result").classList.remove("show");
    } else {
        document.getElementById("beverage-result").innerHTML = e.target.value + " nice choice!";
        document.getElementById("beverage-result").classList.add("show");
    }
};

// adds a sticker to the image when it's clicked
document.getElementById("sticker-image").onclick = (e) => {
    document.getElementById("sticker").classList.toggle("show");
};