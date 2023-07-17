/* Sessão do scroll */

window.addEventListener("scroll", function () {
  /* Sticky navbar */
  var menu = document.querySelector(".menu");
  menu.classList.toggle("sticky", window.scrollY > 50);
});
