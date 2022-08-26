const mainContainer = document.querySelector('.main-container');
const backdrop = document.querySelector('.backdrop');

mainContainer.addEventListener('click', onModalShowInfoCard);

function onModalShowInfoCard(e) {
  console.log('e.target', e.target);
  console.log('e.currentTarget', e.currentTarget);

  if (e.target.closest('.video') || e.target.closest('.main-films')) {
    backdrop.classList.remove('is-hidden');
  }
}
