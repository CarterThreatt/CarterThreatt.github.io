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
// Slideshow (Start Here sidebar stops on the Monuments & Memorials page)
document.querySelectorAll(".slideshow").forEach((show) => {
    const slides = show.querySelectorAll(".slide");
    const dots = show.querySelectorAll(".dot");
    let current = 0;

    const goTo = (index) => {
        slides[current].classList.remove("active");
        dots[current].classList.remove("active");
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("active");
        dots[current].classList.add("active");
    };

    const prevBtn = show.querySelector(".slideshow-prev");
    const nextBtn = show.querySelector(".slideshow-next");

    if (prevBtn) {
        prevBtn.onclick = (e) => {
            goTo(current - 1);
        };
    }

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            goTo(current + 1);
        };
    }

    dots.forEach((dot, i) => {
        dot.onclick = (e) => {
            goTo(i);
        };
    });
});

// Copy the email template text to the clipboard - Found how to do this on W3 Schools
document.querySelectorAll(".email-template .btn-copy").forEach((button) => {
    const originalText = button.textContent;

    button.onclick = (e) => {
        const template = button.parentElement.querySelector("pre").textContent;
        navigator.clipboard.writeText(template);
        button.textContent = "Copied!";
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    };
});
