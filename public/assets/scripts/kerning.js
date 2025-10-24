document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".text-body p:not(.text-question)")
    .forEach((el) => {
      el.innerHTML = el.textContent.replace(
        /(.)(i)/g,
        '<span class="text-kerned">$1$2</span>',
      );
    });
});
