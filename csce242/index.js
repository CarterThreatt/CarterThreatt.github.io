// Toggle menu (small screens)
document.getElementById("nav-toggle").onclick = (e) => {
    document.getElementById("nav-toggle").classList.toggle("open");
    document.getElementById("nav-list").classList.toggle("show");
};

// Shows how many tiles are on the page after filtering
const updateCount = () => {
    const tiles = document.querySelectorAll(".tile");
    let shown = 0;
    tiles.forEach((tile) => {
        if (!tile.classList.contains("hidden")) {
            shown++;
        }
    });
    document.getElementById("filter-count").textContent = `Showing ${shown} of ${tiles.length}`;
};

// Hides a whole section when none of its tiles match the filter
const updateSections = () => {
    document.querySelectorAll("#assignments, #projects").forEach((section) => {
        let matches = 0;
        section.querySelectorAll(".tile").forEach((tile) => {
            if (!tile.classList.contains("hidden")) {
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

// Filter the tiles with the buttons in the filter bar
document.querySelectorAll(".filter-btn").forEach((button) => {
    button.onclick = (e) => {
        const type = button.value;

        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.classList.remove("filter-btn-active");
        });
        button.classList.add("filter-btn-active");

        document.querySelectorAll(".tile").forEach((tile) => {
            if (type == "all" || tile.classList.contains(type)) {
                tile.classList.remove("hidden");
            } else {
                tile.classList.add("hidden");
            }
        });

        updateSections();
        updateCount();
    };
});

updateCount();

// Keeps the copyright year current in the footer
document.getElementById("footer-year").textContent = new Date().getFullYear();
