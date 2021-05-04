window.addEventListener("DOMContentLoaded", () => {
  const main = () => {
    toggleLinks();
    toggleMenu();
  };
  main();
});

// Toggle links of navbar
const toggleLinks = () => {
  const links = document.querySelectorAll("header nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((singleLink) => {
        if (link.textContent === singleLink.textContent) {
          singleLink.classList.add("active");
        } else {
          singleLink.classList.remove("active");
        }
      });
    });
  });
};

// handling the logic of navbar in mobile phones
const toggleMenu = () => {
  const header = document.querySelector("header");
  const menuBtn = document.querySelector(".toggle-menu.fas");
  menuBtn.addEventListener("click", () => {
    header.classList.toggle("active");
  });
};
