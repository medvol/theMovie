const onBackdrop = document.querySelector('.js-backdrop')

function onOpenModal() {
  window.addEventListener('keydown', closeModalByEsc);
  onBackdrop.classList.remove('is-hiddene');
}

function onCloseModal() {
  onBackdrop.classList.add('is-hiddene');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) onCloseModal();
}

function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
export { onOpenModal, onCloseModal, closeModalByEsc, onBackdropClick };
