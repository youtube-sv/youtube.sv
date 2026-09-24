/* =========================================================
   ERASE SUPPORT
   JAVASCRIPT-SKRIPT — VERSION 2026 (SVENSKA)
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* SIDOMENY */
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", () => {
            sidebar.classList.toggle("mobile-open");
        });
    }

    /* SÖKFORMULÄR */
    const searchForm = document.querySelector(".search-box");
    const searchInput = document.querySelector(".search-box input");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const searchValue = searchInput.value.trim();
            if (searchValue !== "") {
                alert("Sökning: " + searchValue);
            }
        });
    }

    /* KATEGORIER */
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.addEventListener("click", () => {
            categories.forEach(item => item.classList.remove("active"));
            category.classList.add("active");
        });
    });

    /* TAWK.TO LIVECHAT INTEGRATION */
    const contactButtons = document.querySelectorAll(".contact-button, .primary-button");

    contactButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (typeof Tawk_API !== "undefined" && typeof Tawk_API.maximize === "function") {
                Tawk_API.maximize();
            } else {
                alert("Livechatten laddas, vänligen vänta ett ögonblick...");
            }
        });
    });

    console.log("Erase Support — Gränssnitt laddat.");
});
