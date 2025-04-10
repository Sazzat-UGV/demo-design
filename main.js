const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...ScrollRevealOption,
});

ScrollReveal().reveal(".header_content h4, .header_content, .section_header", {
  ...ScrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_container p", {
  ...ScrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_btn", {
  ...ScrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_image img", {
  ...ScrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about_content .section_header", {
  ...ScrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about_content .section_description", {
  ...ScrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about_card", {
  ...ScrollRevealOption,
  delay: 1500,
  interval: 500,
});
ScrollReveal().reveal(".price_card", {
  ...ScrollRevealOption,
  interval: 500,
});

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerview: "auto",
  spaceBetween: 20
});