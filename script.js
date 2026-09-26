/* =========================================================
   YOUTUBE STREAMING
   JAVASCRIPT — VERSION 2026
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const sidebar =
        document.getElementById("sidebar");


    if (menuButton && sidebar) {

        menuButton.addEventListener("click", () => {

            sidebar.classList.toggle("mobile-open");

        });


        const sidebarLinks =
            sidebar.querySelectorAll("a");


        sidebarLinks.forEach((link) => {

            link.addEventListener("click", () => {

                if (window.innerWidth <= 700) {

                    sidebar.classList.remove(
                        "mobile-open"
                    );

                }

            });

        });

    }



    /* =====================================================
       FORMULAIRE DE RECHERCHE
    ===================================================== */

    const searchForm =
        document.querySelector(".search-box");

    const searchInput =
        document.querySelector(
            ".search-box input"
        );


    if (searchForm && searchInput) {

        searchForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const searchValue =
                    searchInput.value.trim();


                if (searchValue !== "") {

                    alert(
                        "Sökning: " +
                        searchValue
                    );

                }

            }
        );

    }



    /* =====================================================
       CATEGORIES
    ===================================================== */

    const categories =
        document.querySelectorAll(
            ".category"
        );


    categories.forEach((category) => {

        category.addEventListener(
            "click",
            () => {

                categories.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                category.classList.add(
                    "active"
                );

            }
        );

    });



    /* =====================================================
       TAWK.TO LIVE CHAT
    ===================================================== */

    const contactButtons =
        document.querySelectorAll(
            ".contact-button, .primary-button"
        );


    contactButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {


                if (

                    typeof Tawk_API !==
                    "undefined"

                    &&

                    typeof Tawk_API.maximize ===
                    "function"

                ) {

                    Tawk_API.maximize();

                }

                else {

                    alert(
                        "Livechatten laddas, " +
                        "vänligen vänta ett ögonblick..."
                    );

                }

            }
        );

    });



    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "YouTube Streaming — " +
        "Gränssnitt laddat."
    );

});
