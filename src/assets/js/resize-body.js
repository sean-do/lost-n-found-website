export const resizeBody = () => {
  const main = document.querySelector(".container-main");
  const nav = document.querySelector(".container-nav-top");
  const updateHeight = () => {
    const computedHeight = main.offsetHeight - nav.offsetHeight;

    if (window.matchMedia("(max-width: 1100px)").matches) {
      main.style.setProperty("--content-height", `${computedHeight}px`);
      console.log("updated height");
      console.log("main container height is:" + `${main.offsetHeight}px`);
      console.log("top nav height is:" + `${nav.offsetHeight}px`);
      console.log("section height is:" + `${computedHeight}px`);
    } else {
      main.style.setProperty("--content-height", "100%");
    }
  };
  updateHeight();
  window.addEventListener("resize", updateHeight);
};
