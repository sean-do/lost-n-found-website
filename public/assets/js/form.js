export const otherTextToggle = () => {
  const otherRadio = document.getElementById("other");
  const otherText = document.getElementById("other-text");
  const radios = document.querySelectorAll('input[name="format"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      otherText.classList.toggle("visible", otherRadio.checked);
    });
  });
};
