//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Button clicked!";
    e.target.innerHTML = "done!";
};

//styles the link when it is clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
}

//animates the ball when the button is clicked
document.getElementById("btn-start-animation").onclick = (e) => {
    console.log("ball animation button clicked");
    document.getElementById("ball").classList.toggle("bounce-animation");
}