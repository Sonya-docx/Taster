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
   Анімація оновлення статистики
============================== */
function animateValueWithSuffix(element, valueString, duration) {
    const match = valueString.toString().match(/[\d.,]+/);
    if (!match) {
        element.textContent = valueString;
        return;
    }

    const rawNumber = match[0].replace(/,/g, "");
    const numberPart = parseFloat(rawNumber);
    const suffix = valueString.toString().replace(match[0], "");

    const decimals = (rawNumber.split(".")[1] || "").length;

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        let currentValue = (progress * numberPart).toFixed(decimals);

        // Додаємо кому для тисяч, якщо це ціле число
        if (decimals === 0) {
            currentValue = Number(currentValue).toLocaleString("en-US");
        }

        element.textContent = currentValue + suffix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// При завантаженні статистики
fetch("data/stats.json")
    .then(response => response.json())
    .then(stats => {
        const blocks = document.querySelectorAll(".section__3 > div");

        blocks.forEach(block => {
            const type = block.classList[0]; // kalendar, cheese, potato...

            const valueElement = block.querySelector(".value");
            const labelElement = block.querySelector(".label");

            if (!valueElement || !labelElement) return;

            labelElement.textContent = stats[type].label;

            const endValue = stats[type].value;

            // Використовуємо тільки animateValueWithSuffix для всіх типів
            animateValueWithSuffix(valueElement, endValue, 1000);
        });
    })
    .catch(err => console.error("Error loading stats:", err));

/* ==============================
   ЛІЧИЛЬНИК ОНЛАЙН-КОРИСТУВАЧІВ
============================== */
function updateOnlineUsers() {
    const usersOnline = Math.floor(50 + Math.random() * 100); // випадкове число для демонстрації
    const el = document.getElementById("onlineCounter");

    // Анімація при зміні числа
    el.style.opacity = "0.3";
    setTimeout(() => {
        el.textContent = "👥 Онлайн зараз: " + usersOnline;
        el.style.opacity = "1";
        el.style.transition = "opacity 0.3s ease";
    }, 200);
}

// Оновлюємо кожні 3 секунди
setInterval(updateOnlineUsers, 3000);
updateOnlineUsers(); // одразу при завантаженні
