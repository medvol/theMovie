
const sidebar = document.querySelector('.sidebar');

window.addEventListener('resize', function () {
  if (window.innerWidth > 1280) {
    sidebar.classList.remove('collapse');
  } else {
    sidebar.classList.add('collapse');
  }
});
