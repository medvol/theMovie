import './sass/index.scss'
import { onOpenModal, onCloseModal, closeModalByEsc, onBackdropClick } from './js/modal-our-team';


const sidebar = document.querySelector('.sidebar');

window.addEventListener('resize', function () {
  if (window.innerWidth > 1090) {
    sidebar.classList.remove('collapse');
  } else {
    sidebar.classList.add('collapse');
  }
});


const refs = {
  openModal: document.querySelector('#js-team-modal'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.js-backdrop')
}
refs.openModal.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onBackdropClick)