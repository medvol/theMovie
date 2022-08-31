const sidebar = document.querySelector('.sidebar');

window.addEventListener('resize', function () {
    if (window.innerWidth < 1280) {
        sidebar.addEventListener('click', () => sidebar.classList.toggle('collapse'));
        // sidebar.addEventListener('mouseout', () => sidebar.classList.add('collapse'));
   
  }
});
