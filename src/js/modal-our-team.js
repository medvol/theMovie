const onBackdrop = document.querySelector('[data-modal]')
const footerBtnText = document.querySelector('.footer-btn-text')

function onOpenModal() {
  window.addEventListener('keydown', closeModalByEsc);
  onBackdrop.classList.remove('is-hiddene');
  footerBtnText.classList.toggle('footer-btn-text-click')
}


function onCloseModal() {
  footerBtnText.classList.toggle('footer-btn-text-click')
  onBackdrop.classList.add('is-hiddene');
}


function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
export { onOpenModal, onCloseModal, closeModalByEsc };
