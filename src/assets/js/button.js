export const handleButtonClick = () => {
  const buttons = document.querySelectorAll(".button-main");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });
};
