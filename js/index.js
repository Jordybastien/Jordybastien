// Fix menu on scroll
// window.onscroll = () => {
//   let header = document.getElementsByTagName('nav');
//   window.pageYOffset > 400
//     ? header[0].classList.add('sticky-nav')
//     : header[0].classList.remove('sticky-nav');
// };
// scrollIntoView
goToDiv = (id) =>
  document
    .getElementById(id)
    .scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });

// Footer Year
window.onload = () =>
  (document.getElementById('copyright').innerHTML = new Date().getFullYear());
