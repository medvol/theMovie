export function slickLoader() {
  if (SlickLoader.element.classList.contains('active')) {
    SlickLoader.disable();
  } else {
    SlickLoader.enable();
  }
}
