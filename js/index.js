// Fix menu on scroll
window.onscroll = () => {
  let header = document.getElementsByTagName("nav");
  window.pageYOffset > 400
    ? header[0].classList.add("sticky-nav")
    : header[0].classList.remove("sticky-nav");
};
// scrollIntoView
goToDiv = id => {
  document
    .getElementById(id)
    .scrollIntoView({ block: "center", behavior: "smooth" });
};
