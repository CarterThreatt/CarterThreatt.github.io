document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Button clicked!";
    e.target.innerHTML = "done!";
};