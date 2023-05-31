let menuIcon = document.getElementsByClassName("menu-icon");

window.addEventListener("resize", () => {
  let menu = document.getElementsByClassName("menu");
  if (window.innerWidth >= 1100) {
    menu[0].style.display = "flex";
  } else {
    menu[0].style.display = "none";
  }
});

menuIcon[0].addEventListener("click", () => {
  let menu = document.getElementsByClassName("menu");
  if (menu[0].style.display === "none" || menu[0].style.display == "") {
    menu[0].style.display = "flex";
  } else {
    menu[0].style.display = "none";
  }
});
