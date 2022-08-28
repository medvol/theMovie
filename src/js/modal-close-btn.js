import { onCloseModal } from './modal-our-team';

const overlay = document.querySelector('.overlay');
const modalCardMovie = document.querySelector('.modal_movie_card');

function onModalCloseBtn() {
  modalCardMovie.innerHTML = '';
  overlay.classList.add('is-hidden');
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onModalCloseBtn();
    onCloseModal();
  }
}

function onPushEsc(event) {
  if (event.code === 'Escape') {
    onModalCloseBtn();
  }
}

export { onBackdropClick, onPushEsc, onModalCloseBtn };
