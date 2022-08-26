
function onOpenModal() {
    window.addEventListener('keydown', closeModalByEsc);
    document.body.classList.add('show-modal')
}

function onCloseModal() {
    document.body.classList.remove('show-modal')
}

function onBackdropClick(e) {
    if (e.currentTarget === e.target)
        onCloseModal()
}

function closeModalByEsc(e) {
    if (e.code === 'Escape') {

        onCloseModal()
    }
}
export { onOpenModal, onCloseModal, closeModalByEsc, onBackdropClick };