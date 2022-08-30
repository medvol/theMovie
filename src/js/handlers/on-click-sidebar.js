function OnClickSidebar() {
    let isActive
    let a = document.querySelectorAll('.side-menu__item')
    a.forEach(el => {
        if (el.classList.contains('is-active')) {
            isActive = el
        }
    })
    a.forEach((el) => {
        if (el === event.target.closest('li')) {
            isActive.classList.remove('is-active')
            el.classList.add('is-active');
            isActive = el
        }
    })

}
export { OnClickSidebar }