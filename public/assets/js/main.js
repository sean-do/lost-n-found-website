document.addEventListener("DOMContentLoaded", async () => {
  const { toggleGrayscale } = await import("./grayscale.js");
  toggleGrayscale();

  if (document.body.classList.contains("contribute")) {
    const { otherTextToggle } = await import("./form.js");
    otherTextToggle();
  }
});
