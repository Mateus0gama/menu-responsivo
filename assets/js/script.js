function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    menuMobile.document.querySelector(".icon").src =
      "assets/imagens/close-menu.svg";
  } else {
    menuMobile.classList.add("open");
    menuMobile.document.querySelector(".icon").src =
      "assets/imagens/close-menu.svg";
  }
}
