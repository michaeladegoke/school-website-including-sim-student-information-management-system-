
  const teachersRow = document.querySelector(".teachers-row");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const scrollAmount = teachersRow.clientWidth;

  // RIGHT ARROW
  rightArrow.addEventListener("click", () => {
    teachersRow.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  // LEFT ARROW
  leftArrow.addEventListener("click", () => {
    teachersRow.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  // AUTO SLIDE
  function autoSlide() {

    // if carousel reaches end, go back to start
    if (
      teachersRow.scrollLeft + teachersRow.clientWidth
      >= teachersRow.scrollWidth - 5
    ) {

      teachersRow.scrollTo({
        left: 0,
        behavior: "smooth"
      });

    } else {

      teachersRow.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });

    }
  }

  // move every 3 seconds
  setInterval(autoSlide, 3000);

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("loginModal");
    const openBtn = document.querySelector(".login-btn");
    const closeBtn = document.querySelector(".modal-content span");
    const form = document.getElementById("loginForm");

    // OPEN
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // CLOSE
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // CLOSE OUTSIDE
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // LOGIN
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "student" && password === "1234") {
            window.location.href = "student-dashboard/student-dashboard.html";
        } else {
            alert("Invalid login details");
        }
    });

});