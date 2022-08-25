const filmCard = document.querySelector('.video');
const backdrop = document.querySelector('.backdrop');

filmCard.addEventListener('click', onModalShowInfoCard);

function onModalShowInfoCard() {
  backdrop.classList.remove('is-hidden');
}
