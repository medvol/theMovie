const sidebar = document.querySelector('.sidebar');

window.addEventListener('resize', function () {
    if (window.innerWidth < 1280) {
        sidebar.addEventListener('mouseover', () => sidebar.classList.remove('collapse'));
        sidebar.addEventListener('mouseout', () => sidebar.classList.add('collapse'));
   
  }
});
