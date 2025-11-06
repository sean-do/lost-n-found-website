export const toggleMenu = () => {
  const nav = document.querySelector(".container-main__nav");
  const menuButton = document.querySelector("#menu-button");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
      menuButton.textContent = "CLOSE";
    } else {
      menuButton.textContent = "MENU";
    }
  });
};
