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
};

//shows a message based on the number of days since the plant was watered
document.getElementById("txt-num-days").onchange = (e) => {
    const numDays = parseInt(e.target.value);
    if (numDays <=2) {
        document.getElementById("p-plant-message").innerHTML = `Let your plant rest it's only been ${numDays} days since it was watered.`;
        document.getElementById("img-plant").src = "https://dummyimage.com/150x150/36bd2a/ffffff&text=Happy+Plant";
        document.getElementById("img-plant").classList.remove("hidden");
    } else if (numDays <= 5) {
        document.getElementById("p-plant-message").innerHTML = `Time to water it's been ${numDays} days since it was watered.`;
        document.getElementById("img-plant").src = "https://dummyimage.com/150x150/BDB76B/ffffff&text=Thirsty+Plant";
        document.getElementById("img-plant").classList.remove("hidden");
    } else {
        document.getElementById("p-plant-message").innerHTML = `Your plant is dead it's been ${numDays} days since it was watered.`;
        document.getElementById("img-plant").src = "https://dummyimage.com/150x150/ff0000/ffffff&text=Dead+Plant";
        document.getElementById("img-plant").classList.remove("hidden");
    }
};

//counter
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

document.getElementById("btn-start").onclick = (e) => {
    countInterval = setInterval(() =>{
        pCount.innerHTML = ++count;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
};
document.getElementById("btn-pause").onclick = (e) => {
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
};

document.getElementById("btn-stop").onclick = (e) => {
    clearInterval(countInterval);
    count = 0;
    pCount.innerHTML = count;
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

//date display
setInterval(() => {
    const date = new Date();
    document.getElementById("date-display").innerHTML = date.toLocaleString();
}, 1000);