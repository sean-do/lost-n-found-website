export const toggleGrayscale = () => {
  const toggleButtons = document.querySelectorAll(".colour-toggle__button");
  const savedMode = localStorage.getItem("colourMode");
  if (savedMode === "bw") document.body.classList.add("grayscale");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isGrayscale = button.classList.contains("toggle-bw");
      document.body.classList.toggle("grayscale", isGrayscale);
      localStorage.setItem("colourMode", isGrayscale ? "bw" : "colour");
    });
  });
};
