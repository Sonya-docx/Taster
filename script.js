document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ПІДСВІЧУВАННЯ НАВІГАЦІЇ
    =================================*/
    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove("active-link"));
            link.classList.add("active-link");
        });
    });


    /* ================================
       АНІМАЦІЯ ТА СВІТІННЯ КНОПОК
    =================================*/
    const mainButtons = document.querySelectorAll(".buttons__1");

    mainButtons.forEach(btn => {

        // Світіння при наведенні
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#00bfff";
            btn.style.color = "#fff";
            btn.style.boxShadow = "0 0 15px #00bfff";
            btn.style.transition = "all 0.3s ease";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.style.boxShadow = "";
        });

        // Анімація натискання
        btn.addEventListener("mousedown", () => {
            btn.style.transform = "scale(0.95)";
        });

        btn.addEventListener("mouseup", () => {
            btn.style.transform = "scale(1)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });

        // Поведінка при кліку
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // щоб форма не перезавантажувала сторінку

            if (btn.textContent.includes("BECOME")) {
                alert("Thank you for your interest in becoming a partner!");
            }

            if (btn.textContent.includes("LEARN")) {
                window.open(
                    "https://www.instagram.com/cfoodua?igsh=MWpqMnEzemI5ejlpYg==",
                    "_blank"
                );
            }
        });
    });


    /* ==========================
        ХОВЕР НА ЗОБРАЖЕННЯХ
    ===========================*/
    const allImages = document.querySelectorAll("img");

    allImages.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.07)";
            img.style.transition = "0.3s ease";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

});

/* ==============================
   ДИНАМІЧНІ СТАТИСТИКИ
============================== */
fetch('data/stats.json')
    .then(res => res.json())
    .then(data => {
        const statsDivs = document.querySelectorAll(".section__3 > div");

        statsDivs.forEach(div => {
            // ключ беремо з класу: kalendar, cheese, potato, noodles, prawns, rides
            const key = div.className.toLowerCase();

            if (data[key]) {
                div.querySelector("p:first-child").textContent = data[key].value;
                div.querySelector("p:last-child").textContent = data[key].label;
            }
        });
    })
    .catch(err => console.error("Error loading stats:", err));
