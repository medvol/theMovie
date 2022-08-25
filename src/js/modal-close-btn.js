const modalCloseBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');

modalCloseBtn.addEventListener('click', onModalCloseBtn);
backdrop.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onPushEsc);

function onModalCloseBtn() {
  backdrop.classList.add('is-hidden');
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onModalCloseBtn();
  }
}

function onPushEsc(event) {
  if (event.code === 'Escape') {
    onModalCloseBtn();
  }
}
