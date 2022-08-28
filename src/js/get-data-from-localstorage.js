export const getFromLocalStorage = key =>
  localStorage.getItem(key) === null
    ? []
    : JSON.parse(localStorage.getItem(key));
