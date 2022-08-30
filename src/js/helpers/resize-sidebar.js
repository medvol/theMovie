const sidebar = document.querySelector('.sidebar');

window.addEventListener('resize', function () {
    if (window.innerWidth < 1280) {
        sidebar.addEventListener('touch', () => sidebar.classList.toggle('collapse'));
        // sidebar.addEventListener('mouseout', () => sidebar.classList.add('collapse'));
   
  }
});
