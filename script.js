/* Sessão do scroll */

window.addEventListener("scroll", function () {
  /* Sticky navbar */
  var menu = document.querySelector(".menu");
  menu.classList.toggle("sticky", window.scrollY > 50);
});

/* Sessão de copiar ao clicar */

document.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    let copyText = event.target.textContent;
    navigator.clipboard.writeText(copyText);
  }
});
