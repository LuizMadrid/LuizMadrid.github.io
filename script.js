window.addEventListener("scroll", function () {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("sticky", window.scrollY > 50);
});

document.getElementById("email").addEventListener("click", () => {
  let emailContent = document.getElementById("email").textContent;
  navigator.clipboard.writeText(emailContent);

  document.getElementById("email").style.display = "none";

  if (document.getElementById("email").style.display === "none") {
    document.getElementById("email").insertAdjacentHTML("afterend", "<p class='conteudo-contato'>Copiado!</p>");
  }

  setTimeout(() => {
    document.getElementById("email").style.display = "flex";
    document.getElementById("email").nextElementSibling.remove();
  }, 2000);
});

document.getElementById("whatsapp").addEventListener("click", () => {
  let whatsappContent = document.getElementById("whatsapp").textContent;
  navigator.clipboard.writeText(whatsappContent);

  document.getElementById("whatsapp").style.display = "none";

  if (document.getElementById("whatsapp").style.display === "none") {
    document.getElementById("whatsapp").insertAdjacentHTML("afterend", "<p class='conteudo-contato'>Copiado!</p>");
  }

  setTimeout(() => {
    document.getElementById("whatsapp").style.display = "flex";
    document.getElementById("whatsapp").nextElementSibling.remove();
  }, 2000);
});

const birthDate = new Date(2000, 9, 12);
const today = new Date();
const ageInMilliseconds = today - birthDate;
const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
document.getElementById("age").textContent = `Tenho ${ageInYears} anos, sou natural de Araçatuba/SP.`;