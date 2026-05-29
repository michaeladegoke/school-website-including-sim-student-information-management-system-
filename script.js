
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


  //login
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

