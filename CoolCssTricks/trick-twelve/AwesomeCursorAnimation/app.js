const cursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

const animateCursor = function(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
};

window.addEventListener("mousemove", animateCursor);

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.classList.add("hovered-link");
        cursor.classList.add("hovering-cursor");
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove("hovered-link");
        cursor.classList.remove("hovering-cursor");
    });
});


window.addEventListener("mouseover", () => {
  cursor.style.opacity = "1";
});

window.addEventListener("mouseout", () => {
    cursor.style.opacity = "0";
})