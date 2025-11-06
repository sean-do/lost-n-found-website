import { handleButtonClick } from "./button.js";

document.addEventListener("DOMContentLoaded", async () => {
  const { toggleGrayscale } = await import("./grayscale.js");
  toggleGrayscale();

  if (document.body.classList.contains("contribute")) {
    const { otherTextToggle } = await import("./form.js");
    otherTextToggle();
  }

  const { toggleMenu } = await import("./nav.js");
  toggleMenu();

  const { resizeBody } = await import("./resize-body.js");
  resizeBody();

  const { handleButtonClicl } = await import("./button.js");
  handleButtonClick();
});
