export const toggleGrayscale = () => {
  const toggleButtons = document.querySelectorAll(".colour-toggle__button");
  // load saved state
  const savedMode = localStorage.getItem("colourMode");
  const isGrayscale = savedMode === "bw";
  if (isGrayscale) document.documentElement.classList.add("grayscale");
  else document.documentElement.classList.remove("grayscale");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activateGrayscale = button.classList.contains("toggle-grayscale");
      if (activateGrayscale) {
        document.documentElement.classList.add("grayscale");
        localStorage.setItem("colourMode", "bw");
      } else {
        document.documentElement.classList.remove("grayscale");
        localStorage.setItem("colourMode", "colour");
      }
    });
  });
};
