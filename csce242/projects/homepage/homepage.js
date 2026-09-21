// Toggle menu (small screens)
document.getElementById("nav-toggle").onclick = (e) => {
    document.getElementById("nav-toggle").classList.toggle("open");
    document.getElementById("nav-list").classList.toggle("show");
};

// Close the menu once a nav link is picked
document.querySelectorAll(".nav-link").forEach((link) => {
    link.onclick = (e) => {
        document.getElementById("nav-toggle").classList.remove("open");
        document.getElementById("nav-list").classList.remove("show");
    };
});