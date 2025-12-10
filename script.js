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
       АНІМАЦІЯ ТА РЕАКЦІЯ КНОПОК
    =================================*/
    const mainButtons = document.querySelectorAll(".buttons__1");

    mainButtons.forEach(btn => {

        btn.addEventListener("mousedown", () => {
            btn.classList.add("btn-active");
        });

        btn.addEventListener("mouseup", () => {
            btn.classList.remove("btn-active");
        });

        btn.addEventListener("mouseleave", () => {
            btn.classList.remove("btn-active");
        });

        // Поведінка при кліку
        btn.addEventListener("click", () => {
            if (btn.textContent.includes("BECOME")) {
                alert("Thank you for your interest in becoming a partner!");
            }
            if (btn.textContent.includes("LEARN")) {
                window.scrollTo({
                    top: document.querySelector(".section_2").offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });


    /* ==================================================
        ДОДАВАННЯ / ВИДАЛЕННЯ ЕЛЕМЕНТІВ У 'Bitesize Stats'
    ===================================================*/
    const statsContainer = document.querySelector(".section__3");

    // Створюємо кнопку "Add block"
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Block";
    addBtn.className = "add-block-btn";
    statsContainer.after(addBtn);

    addBtn.addEventListener("click", () => {
        const newBlock = document.createElement("div");
        newBlock.className = "dynamic-block";

        newBlock.innerHTML = `
            <img src="images/food.jpg" alt="food" style="width:60px">
            <p>New</p>
            <p>Dynamic Block</p>
            <button class="delete-btn">Delete</button>
        `;

        statsContainer.appendChild(newBlock);

        newBlock.querySelector(".delete-btn").addEventListener("click", () => {
            newBlock.remove();
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
