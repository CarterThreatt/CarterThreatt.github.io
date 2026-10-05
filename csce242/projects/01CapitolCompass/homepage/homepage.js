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

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active");
        });
        slides[index].classList.add("active");
        dots[index].classList.add("active");
    };

    // step is 1 for next and -1 for previous, slides hidden by the filter are skipped
    const move = (step) => {
        let current = 0;
        slides.forEach((slide, i) => {
            if (slide.classList.contains("active")) {
                current = i;
            }
        });
        let next = (current + step + slides.length) % slides.length;
        while (slides[next].classList.contains("hidden")) {
            next = (next + step + slides.length) % slides.length;
        }
        showSlide(next);
    };

    const prevBtn = show.querySelector(".slideshow-prev");
    const nextBtn = show.querySelector(".slideshow-next");

    if (prevBtn) {
        prevBtn.onclick = (e) => {
            move(-1);
        };
    }

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            move(1);
        };
    }

    dots.forEach((dot, i) => {
        dot.onclick = (e) => {
            showSlide(i);
        };
    });
});

// Filter the monuments and memorials with the buttons in the filter bar
document.querySelectorAll(".filter-btn").forEach((button) => {
    button.onclick = (e) => {
        const type = button.value;

        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.classList.remove("filter-btn-active");
        });
        button.classList.add("filter-btn-active");

        document.querySelectorAll(".monument").forEach((item) => {
            if (type == "all" || item.classList.contains(type)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });

        // slideshow starts again on the first stop that is left
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        let shown = 0;
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active");
            if (slide.classList.contains("hidden")) {
                dots[i].classList.add("hidden");
            } else {
                dots[i].classList.remove("hidden");
                if (shown == 0) {
                    slide.classList.add("active");
                    dots[i].classList.add("active");
                }
                shown++;
            }
        });

        // one stop left does not need the prev and next buttons
        const controls = document.querySelector(".slideshow-controls");
        if (shown > 1) {
            controls.classList.remove("hidden");
        } else {
            controls.classList.add("hidden");
        }

        // hide a whole section when nothing in it matches
        document.querySelectorAll("#start-here, #rest-of-district").forEach((section) => {
            let matches = 0;
            section.querySelectorAll(".monument").forEach((item) => {
                if (!item.classList.contains("hidden")) {
                    matches++;
                }
            });
            if (matches == 0) {
                section.classList.add("hidden");
            } else {
                section.classList.remove("hidden");
            }
        });
    };
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
