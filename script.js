document.addEventListener("DOMContentLoaded", () => {

    console.log("JS is working 🚀");

    // ======================
    // SCHOOL API (SLOGAN)
    // ======================
   const sloganElement = document.getElementById("slogan");
const descriptionElement = document.getElementById("description");

fetch("/api/school")
    .then(res => res.json())
    .then(data => {

        console.log("API data:", data);

        if (sloganElement) {
            sloganElement.innerText = data.slogan;
        }

        if (descriptionElement) {
            descriptionElement.innerText = data.description;
        }

    })
    .catch(err => {
        console.log("Fetch error:", err);
    });

    // ======================
    // TEACHERS CAROUSEL
    // ======================
    const teachersRow = document.querySelector(".teachers-row");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    if (teachersRow && leftArrow && rightArrow) {

        const scrollAmount = teachersRow.clientWidth;

        rightArrow.addEventListener("click", () => {
            teachersRow.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });

        leftArrow.addEventListener("click", () => {
            teachersRow.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        function autoSlide() {
            if (
                teachersRow.scrollLeft + teachersRow.clientWidth >=
                teachersRow.scrollWidth - 5
            ) {
                teachersRow.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                teachersRow.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        }

        setInterval(autoSlide, 3000);
    }


    // ======================
    // LOGIN MODAL
    // ======================
    const modal = document.getElementById("loginModal");
    const openBtn = document.querySelector(".login-btn");
    const closeBtn = document.querySelector(".modal-content span");
    const form = document.getElementById("loginForm");

    if (modal && openBtn && closeBtn && form) {

        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "student" && password === "1234") {
                window.location.href = "student-dashboard/student-dashboard.html";
            } else {
                alert("Invalid login details");
            }
        });
    }

});